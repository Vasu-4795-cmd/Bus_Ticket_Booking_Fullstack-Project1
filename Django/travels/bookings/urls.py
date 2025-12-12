
from django.urls import path
from .views import RegisterView, LoginView, BusListCreateView, UserBookingView, BookingView, BusDetailView

urlpatterns = [
    path('buses/', BusListCreateView.as_view(), name='buslist'),
    path('buses/<int:pk>/', BusDetailView.as_view(), name='bus-detail'),
    path('register/', RegisterView.as_view(), name = 'register'),
    path('login/', LoginView.as_view(), name = 'login'),
    path('user/<int:user_id>/bookings/', UserBookingView.as_view(), name="user-bookings"),
    path('booking/', BookingView.as_view(), name="booking")
]