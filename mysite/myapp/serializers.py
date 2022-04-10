from rest_framework import serializers
from .models import GameServer, MusicBot, Post

# Posts
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'body')

# Game Servers
class GameServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameServer
        fields = ('id', 'game', 'date', 'directory', 'file_size')

class MusicBotSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicBot
        fields = ('id', 'date', 'directory', 'version', 'server')