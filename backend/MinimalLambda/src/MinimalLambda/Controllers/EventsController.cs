using Microsoft.AspNetCore.Mvc;
using MinimalLambda.Filters;
using MinimalLambda.Models;
using MinimalLambda.Services;

namespace MinimalLambda.Controllers;

[ApiController]
[Route("[controller]")]
[ProducesResponseType( statusCode: StatusCodes.Status500InternalServerError)]
public class EventsController(ILogger<EventsController> logger, IEventService eventService)
    : ControllerBase
{
    /// <summary>
    /// Get all events of last hour.
    /// </summary>
    /// <returns>List of Event model</returns>
    [HttpGet("all")]
    [ProducesResponseType( type: typeof(List<EventItemResponseModel>), statusCode: StatusCodes.Status200OK)]
    public List<EventItemResponseModel> AllEvents()
    {
        logger.LogInformation("get all events");
        return eventService.GetAllEvents();
    }

    /// <summary>
    /// Add event.
    /// </summary>
    /// <param name="eventItem">Body content with imageUrl and Description field</param>
    /// <returns>status code</returns>
    [HttpPost("add")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ValidateModel]
    public IResult AddEvent(EventItemRequestModel eventItem)
    {
        logger.LogInformation($"add event: ${eventItem}");
        eventService.AddEvent(eventItem);

        return Results.Created();
    }
}