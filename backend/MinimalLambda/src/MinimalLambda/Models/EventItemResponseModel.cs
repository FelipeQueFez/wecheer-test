namespace MinimalLambda.Models;

/// <summary>
/// Item of represent a event
/// </summary>
/// <param name="DateTime">Datetiem of this event</param>
public class EventItemResponseModel : EventItemRequestModel
{
    public required DateTime DateTime { get; set; }
}