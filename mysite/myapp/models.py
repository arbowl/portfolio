from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.urls import reverse
import os
import json

# Create your models here.

# Blog stuff
class Post(models.Model):
    title = models.CharField(max_length=80)
    author = models.ForeignKey(User, default='user', editable=False, on_delete=models.CASCADE)
    body = models.TextField(max_length=1000)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return self.title + ' | ' + str(self.author)
    
    def get_absolute_url(self):
        return '/'


# Upload Stuff
class GamePost(models.Model):
    title = models.CharField(max_length=90)
    date = models.DateTimeField(auto_now_add=True)
    class Game(models.TextChoices):
        VALHEIM = 'VALHEIM', 'Valheim'
        MINECRAFT = 'MINECRAFT', 'Minecraft'
        MUSICBOT = 'MUSICBOT', 'MusicBot'
        KEEPASSXC = 'KEEPASSXC', 'KeePassXC'
    game = models.CharField(max_length=100, choices=Game.choices, default=Game.VALHEIM)
    file = models.FileField()

    class Meta:
        ordering = ['-date']

    def get_absolute_url(self):
            return 'file'

    def __str__(self):
        return self.game + ' - ' + str(self.date) + str(self.file)

