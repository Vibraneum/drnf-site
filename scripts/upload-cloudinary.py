#!/usr/bin/env python3
"""
DRNF Cloudinary Upload Script (Python version)
Uses built-in libraries only
"""

import os
import json
import base64
import hashlib
import time
import urllib.request
import urllib.parse
from pathlib import Path

# Cloudinary credentials
CLOUD_NAME = 'dhupieu4x'
API_KEY = '514375451689993'
API_SECRET = 'n6jJhK7rY1qleak60_1NV41VHGY'
FOLDER = 'drnf-assets'

IMAGES_DIR = Path(__file__).parent.parent / 'images'

# Images to upload
IMAGES = [
    ('DRNF_logo.jpg', 'logos/drnf-logo'),
    ('rabinder_nath_1.6.jpg', 'founder/rabinder-nath-1'),
    ('rabinder_nath2.1.jpg', 'founder/rabinder-nath-2'),
    ('rabinder_nath_5.1.jpg', 'founder/rabinder-nath-5-1'),
    ('rabinder_nath_5.5.jpg', 'founder/rabinder-nath-5-5'),
    ('rabinder_nath_drive.jpg', 'founder/rabinder-nath-drive'),
    ('Untitled.png', 'community/chai-main'),
    ('Untitled 1.png', 'community/chai-1'),
    ('Untitled 2.png', 'community/chai-2'),
    ('Untitled 3.png', 'community/chai-3'),
    ('Untitled 4.png', 'community/chai-4'),
    ('Untitled 5.png', 'community/chai-5'),
    ('Untitled 6.png', 'community/chai-6'),
    ('Untitled 7.png', 'community/chai-7'),
    ('community-service-team.jpg', 'community/service-team'),
    ('loocafe_no_bg_collage.png', 'loocafe/collage-main'),
    ('LooCafe_Workstation.png', 'loocafe/workstation'),
    ('loocafe/hero-cover.png', 'loocafe/hero-cover'),
    ('loocafe/logo.png', 'loocafe/logo'),
    ('loocafe/exterior-view.png', 'loocafe/exterior-view'),
    ('loocafe/mini-collage.png', 'loocafe/mini-collage'),
    ('loocafe/collage-2024.png', 'loocafe/collage-2024'),
]

def generate_signature(params):
    """Generate Cloudinary signature"""
    sorted_params = sorted(params.items())
    to_sign = '&'.join(f'{k}={v}' for k, v in sorted_params)
    to_sign += API_SECRET
    return hashlib.sha1(to_sign.encode()).hexdigest()

def upload_image(local_path, public_id):
    """Upload single image to Cloudinary"""
    full_path = IMAGES_DIR / local_path
    if not full_path.exists():
        print(f'⏭️  Skip (not found): {local_path}')
        return None

    print(f'📤 Uploading: {local_path}')

    # Read and encode file
    with open(full_path, 'rb') as f:
        file_data = base64.b64encode(f.read()).decode()

    timestamp = str(int(time.time()))
    full_public_id = f'{FOLDER}/{public_id}'

    params = {
        'public_id': full_public_id,
        'timestamp': timestamp,
        'overwrite': 'true',
    }

    signature = generate_signature(params)

    # Build form data
    data = {
        'file': f'data:image/auto;base64,{file_data}',
        'public_id': full_public_id,
        'timestamp': timestamp,
        'api_key': API_KEY,
        'signature': signature,
        'overwrite': 'true',
    }

    encoded_data = urllib.parse.urlencode(data).encode()

    url = f'https://api.cloudinary.com/v1_1/{CLOUD_NAME}/image/upload'

    try:
        req = urllib.request.Request(url, data=encoded_data)
        with urllib.request.urlopen(req, timeout=60) as response:
            result = json.loads(response.read().decode())
            print(f'✅ Uploaded: {result["secure_url"]}')
            return result['secure_url']
    except Exception as e:
        print(f'❌ Failed: {e}')
        return None

def main():
    print('\n🚀 DRNF Cloudinary Upload\n')
    print(f'☁️  Cloud: {CLOUD_NAME}')
    print(f'📁 Folder: {FOLDER}')
    print('=' * 50)

    results = {}
    success = 0
    failed = 0

    for local_path, public_id in IMAGES:
        url = upload_image(local_path, public_id)
        if url:
            results[public_id] = url
            success += 1
        else:
            failed += 1
        time.sleep(0.5)  # Rate limit

    print('\n' + '=' * 50)
    print(f'✅ Success: {success}')
    print(f'❌ Failed: {failed}')

    # Save results
    output_path = Path(__file__).parent.parent / 'cloudinary-urls.json'
    with open(output_path, 'w') as f:
        json.dump(results, f, indent=2)
    print(f'\n📄 Saved to: cloudinary-urls.json')

if __name__ == '__main__':
    main()
