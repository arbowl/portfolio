from django.urls import path, include
from . import views
from .views import UploadView, CreatePostView, SignUpView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', CreatePostView.as_view(), name="home"),
    path('resume', CreatePostView.as_view(), name="resume"),
    path('portfolio', CreatePostView.as_view(), name="portfolio"),
    path('album', CreatePostView.as_view(), name="album"),
    path('calendar', CreatePostView.as_view(), name="calendar"),
    path('hobbies', CreatePostView.as_view(), name="hobbies"),
    path('about', CreatePostView.as_view(), name="about"),
    path('contact', CreatePostView.as_view(), name="contact"),
    path('upload', UploadView.as_view(), name="upload"),
    path('download/', views.DownloadListView, name="download"),
    path('accounts/', include('django.contrib.auth.urls')),
    path('signup/', SignUpView.as_view(), name="signup"),
    path('delete/<post_id>', views.delete_post, name="delete"),
    path('delete_file/<file_id>', views.delete_file, name="delete_file"),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)