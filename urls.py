from django.urls import path
from . import views


urlpatterns=[

path('', views.home,name='home'),

path('gallery/',views.gallery_page,name='gallery'),

path('artists/',views.artists,name='artists'),

path('about/',views.about,name='about'),

path('contact/',views.contact,name='contact'),

path('favourites/',views.favourites,name='favourites'),

path('auth/',views.auth,name='auth'),


path('register/',views.register_user,name='register_user'),

path('login/',views.login_user,name='login_user'),

]