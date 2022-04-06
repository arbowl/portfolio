from django.db import models
import os

# Create your models here.

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
    version = ''
    server = ''

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