using AutoMapper;
using AirSnS.Dtos;
using AirSnS.Models;

namespace AirSnS.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}