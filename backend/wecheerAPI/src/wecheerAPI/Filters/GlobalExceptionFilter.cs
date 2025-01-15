using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace wecheerAPI.Filters;

public class GlobalExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        int statusCode;
        
        switch (context.Exception)
        {
            case ValidationException:
                statusCode = StatusCodes.Status400BadRequest;
                break;
            case UnauthorizedAccessException:
                statusCode = StatusCodes.Status401Unauthorized;
                break;
            default:
                statusCode = StatusCodes.Status500InternalServerError;
                break;
        }
        
        bool isDevelopment = true;
        //TODO:review - why this code return false in development?
            // context.HttpContext.RequestServices.GetService<IWebHostEnvironment>()?.IsDevelopment() ==
            //                  true;
        var response = new
        {
            error = "An unexpected error occurred.",
            details = isDevelopment
                ? context.Exception.StackTrace
                : null
        };

        context.Result = new ObjectResult(response)
        {
            StatusCode = statusCode
        };
    }
}