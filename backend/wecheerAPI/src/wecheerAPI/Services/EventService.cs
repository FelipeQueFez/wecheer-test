using wecheerAPI.Models;

namespace wecheerAPI.Services;

public interface IEventService
{
    void AddEvent(EventItemRequestModel eventItemModel);
    List<EventItemResponseModel> GetAllEvents();
}

internal class EventService : IEventService
{
    private readonly List<EventItemResponseModel> _events = new List<EventItemResponseModel>();

    private void DeleteEventsLastHour()
    {
        var time = DateTime.Now.AddHours(-1);
        
        var keys = _events.Where(item =>
        {
            var difference = item.DateTime - DateTime.Now;
            return difference.TotalHours > 1;
        });

        foreach (var item in keys)
        {
            _events.Remove(item);
        }
    }
    
    public void AddEvent(EventItemRequestModel eventItemModel)
    {
        DeleteEventsLastHour();
        _events.Add(new EventItemResponseModel()
        {
            DateTime = DateTime.Now,
            ImageUrl = eventItemModel.ImageUrl,
            Description = eventItemModel.Description,
        });
    }

    public List<EventItemResponseModel> GetAllEvents()
    {
        var data = (from item in _events
                    orderby item.DateTime descending
                    select new EventItemResponseModel
                    {
                      DateTime = item.DateTime,
                      ImageUrl = item.ImageUrl,
                      Description = item.Description
                    }).ToList(); 

        return data;
    }
}