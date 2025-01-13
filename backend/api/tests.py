

# Create your tests here.
from django.test import TestCase
from cloudinary.uploader import upload
from cloudinary.api import resource
import os

class CloudinaryUploadTest(TestCase):
    def test_file_upload(self):
        # Path to a local file for testing purposes
        file_path = 'OIP.jpg'
        
        # Ensure the file exists before uploading
        self.assertTrue(os.path.exists(file_path), "Test file does not exist.")
        
        # Upload the file to Cloudinary
        result = upload(file_path)
        
        # Print the result to check the upload response
        print(result)
        
        # Verify that the result contains expected keys
        self.assertIn('public_id', result, "Upload result should contain 'public_id'.")
        self.assertIn('url', result, "Upload result should contain 'url'.")
        
        # Optionally, verify the file exists on Cloudinary
        uploaded_file = resource(result['public_id'])
        self.assertEqual(uploaded_file['public_id'], result['public_id'])
