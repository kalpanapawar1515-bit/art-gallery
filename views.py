from django.shortcuts import render, redirect
from .models import User



def home(request):
    return render(request, "index.html")



def gallery_page(request):
    return render(request, "gallery.html")



def artists(request):
    return render(request, "artists.html")



def about(request):
    return render(request, "about.html")



def contact(request):
    return render(request, "contact.html")



def favourites(request):
    return render(request, "favourites.html")



def auth(request):
    return render(request, "auth.html")



# REGISTER

def register_user(request):

    if request.method == "POST":

        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')


        if User.objects.filter(email=email).exists():

            return redirect('auth')


        User.objects.create(
            fullname=name,
            email=email,
            password=password
        )


        return redirect('auth')


    return redirect('auth')




# LOGIN

def login_user(request):

    if request.method == "POST":

        email = request.POST.get('email')
        password = request.POST.get('password')


        user = User.objects.filter(
            email=email,
            password=password
        ).first()



        if user:

            return redirect('gallery')


        else:

            return redirect('auth')


