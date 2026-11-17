from django.db import models

class User(models.Model):
    fullname = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.fullname

        

from django.db import models


# Artwork Table
class Artwork(models.Model):

    title = models.CharField(max_length=100)

    category = models.CharField(max_length=50)

    image = models.ImageField(upload_to="artworks/")

    description = models.TextField()


    def __str__(self):
        return self.title



# Favourite Table
class Favourite(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    artwork = models.ForeignKey(
        Artwork,
        on_delete=models.CASCADE
    )



# Contact Table
class ContactMessage(models.Model):

    name = models.CharField(max_length=100)

    email = models.EmailField()

    message = models.TextField()


    def __str__(self):
        return self.name