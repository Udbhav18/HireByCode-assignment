from django.urls import path, include
from .views import TaskViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('tasks', TaskViewSet, basename='tasks')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
