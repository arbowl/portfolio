from rest_framework import serializers
from .models import GamePost, Post

# Posts
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'body', 'date')


class GamePostSerlializer(serializers.ModelSerializer):
    class Meta:
        model = GamePost
        fields = ('id', 'author', 'title', 'date', 'game', 'file')
