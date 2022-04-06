from rest_framework import serializers
from .models import GameServer, MusicBot

class GameServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameServer
        fields = ('id', 'game', 'date', 'directory', 'file_size')

class MusicBotSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicBot
        fields = ('id', 'date', 'directory', 'version', 'server')