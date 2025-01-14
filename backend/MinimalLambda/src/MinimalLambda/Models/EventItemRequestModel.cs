using System.ComponentModel.DataAnnotations;

namespace MinimalLambda.Models;

/// <summary>
/// Item of represent a event
/// </summary>
/// <param name="ImageUrl">Url of image</param>
/// <param name="Description">Description of the event</param>
public class EventItemRequestModel
{
    [Required(ErrorMessage = "ImageUrl is required.")]
    [Url(ErrorMessage = "ImageUrl must be a valid URL.")]
    [RegularExpression(@"^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)$", 
        ErrorMessage = "ImageUrl must point to an image (.jpg, .jpeg, .png, .gif).")]
    public required String ImageUrl { get; set; }
    
    [Required(ErrorMessage = "Description is required.")]
    [StringLength(500, ErrorMessage = "Description cannot exceed 500 characters.")]
    public required String Description { get; set; }

    public override string ToString() => $"ImageUrl: {this.ImageUrl}, Description: {this.Description}";
}