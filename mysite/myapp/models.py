from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
import os
import json

# Create your models here.

# Blog stuff
class Post(models.Model):
    title = models.CharField(max_length=80)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField(max_length=1000)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return self.title + ' | ' + str(self.author)
    
    def get_absolute_url(self):
        return '/'

# Game stuff
def pull_server_data(server):
    if server.lower() == 'valheim':
        game = server
        directory = '~/.config/unity3d/IronGate/Valheim/worlds'
    if server.lower == 'minecraft':
        game = server
        directory = ''
    
    date = os.path.getmtime(directory)
    file_size = os.path.getsize(directory)

def pull_music_bot():
    directory = '/home/drew/Documents/MusicBot'
    date = os.path.getmtime(directory)
    dir_list = os.listdir(directory)
    jar_file = [file for file in dir_list if 'jar' in file][:-4]
    version = jar_file.split('-')[1]
    json_file = open('/home/drew/Documents/MusicBot/serversettings.json')
    json_data = json.load(json_file)
    server = [val for val in json_data][0]

class GameServer(models.Model):
    game = models.CharField(max_length=100, default="", unique=False)
    date = models.DateTimeField(auto_now_add=False)
    directory = models.CharField(max_length=100, default="", unique=False)
    file_size = models.IntegerField(null=False, default=0, unique=True)

class MusicBot(models.Model):
    date = models.DateTimeField(auto_now_add=False)
    directory = models.CharField(max_length=100, default="/home/drew/Documents/MusicBot", unique=False)
    version = models.CharField(max_length=100, default="", unique=False)
    server = models.CharField(max_length=100, default="", unique=False)