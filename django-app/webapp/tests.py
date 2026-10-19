from django.test import TestCase
from django.urls import reverse


class HomePageTests(TestCase):

    def test_homepage_status_code(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

    def test_homepage_message(self):
        response = self.client.get(reverse('home'))
        self.assertContains(
            response,
            "Hello! My Django application is running."
        )