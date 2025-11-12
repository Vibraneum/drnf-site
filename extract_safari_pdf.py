#!/usr/bin/env python3
"""
Safari User Panel PDF Extractor
Extracts text, images, and tables from Safari User Panel.pdf
"""

import PyPDF2
import pdfplumber
import json
import os
from pathlib import Path

# Paths
PDF_PATH = "/mnt/d/Ixora Sites/DRNF_website/Safari User Panel.pdf"
OUTPUT_DIR = "/mnt/d/Ixora Sites/extracted-pdf-content/safari-user-panel"
IMAGES_DIR = os.path.join(OUTPUT_DIR, "images")
TEXT_OUTPUT = os.path.join(OUTPUT_DIR, "safari_content.txt")
TABLES_OUTPUT = os.path.join(OUTPUT_DIR, "safari_tables.json")
ANALYSIS_OUTPUT = os.path.join(OUTPUT_DIR, "SAFARI_PDF_ANALYSIS.md")

# Create output directories
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)

def extract_text_pypdf2():
    """Extract text using PyPDF2"""
    print("📄 Extracting text with PyPDF2...")
    text_content = []

    with open(PDF_PATH, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        num_pages = len(pdf_reader.pages)
        print(f"   Found {num_pages} pages")

        for page_num in range(num_pages):
            page = pdf_reader.pages[page_num]
            text = page.extract_text()
            text_content.append({
                'page': page_num + 1,
                'text': text
            })
            print(f"   ✓ Page {page_num + 1} extracted")

    return text_content, num_pages

def extract_tables_pdfplumber():
    """Extract tables using pdfplumber"""
    print("\n📊 Extracting tables with pdfplumber...")
    all_tables = []

    with pdfplumber.open(PDF_PATH) as pdf:
        for page_num, page in enumerate(pdf.pages, 1):
            tables = page.extract_tables()
            if tables:
                print(f"   ✓ Found {len(tables)} table(s) on page {page_num}")
                for table_num, table in enumerate(tables, 1):
                    all_tables.append({
                        'page': page_num,
                        'table_number': table_num,
                        'data': table
                    })

    if not all_tables:
        print("   No tables found")

    return all_tables

def extract_images_pdfplumber():
    """Extract images using pdfplumber"""
    print("\n🖼️  Extracting images with pdfplumber...")
    image_count = 0

    with pdfplumber.open(PDF_PATH) as pdf:
        for page_num, page in enumerate(pdf.pages, 1):
            if hasattr(page, 'images') and page.images:
                print(f"   ✓ Found {len(page.images)} image(s) on page {page_num}")
                for img_num, img in enumerate(page.images, 1):
                    image_count += 1
            else:
                # Check for inline images
                if hasattr(page, 'objects') and 'image' in page.objects:
                    num_images = len(page.objects['image'])
                    if num_images > 0:
                        print(f"   ✓ Found {num_images} inline image(s) on page {page_num}")
                        image_count += num_images

    if image_count == 0:
        print("   No images found (text-only PDF)")
    else:
        print(f"   Total images detected: {image_count}")

    return image_count

def analyze_content(text_content, tables, num_images):
    """Analyze the PDF content to determine purpose and relevance"""
    print("\n🔍 Analyzing content...")

    # Combine all text for analysis
    full_text = " ".join([page['text'] for page in text_content]).lower()

    # Keywords to check for content type
    technical_keywords = ['api', 'endpoint', 'authentication', 'token', 'database', 'server', 'configuration']
    drnf_keywords = ['drnf', 'chai', 'foundation', 'community', 'volunteer', 'donation', 'loocafe']
    safari_keywords = ['safari', 'user', 'panel', 'dashboard', 'admin', 'management']

    # Count keyword occurrences
    technical_score = sum(1 for kw in technical_keywords if kw in full_text)
    drnf_score = sum(1 for kw in drnf_keywords if kw in full_text)
    safari_score = sum(1 for kw in safari_keywords if kw in full_text)

    analysis = {
        'total_pages': len(text_content),
        'total_tables': len(tables),
        'total_images': num_images,
        'word_count': len(full_text.split()),
        'content_type_scores': {
            'technical': technical_score,
            'drnf_related': drnf_score,
            'safari_related': safari_score
        },
        'likely_purpose': '',
        'relevance_for_drnf': '',
        'recommendation': ''
    }

    # Determine likely purpose
    if technical_score > 5:
        analysis['likely_purpose'] = 'Technical documentation (API docs, configuration, setup guide)'
    elif safari_score > 3:
        analysis['likely_purpose'] = 'Safari User Panel documentation (admin dashboard, user management)'
    else:
        analysis['likely_purpose'] = 'General documentation or informational content'

    # Determine relevance for DRNF website
    if drnf_score > 5:
        analysis['relevance_for_drnf'] = 'HIGH - Contains DRNF-related content suitable for website'
        analysis['recommendation'] = 'Review for integration into DRNF website (about page, initiatives, etc.)'
    elif drnf_score > 0:
        analysis['relevance_for_drnf'] = 'MEDIUM - Contains some DRNF references but primarily technical'
        analysis['recommendation'] = 'Extract DRNF-specific content only, archive technical portions'
    else:
        analysis['relevance_for_drnf'] = 'LOW - Technical documentation not suitable for public website'
        analysis['recommendation'] = 'Archive for internal reference only, do not publish to website'

    return analysis

def save_text_output(text_content):
    """Save extracted text to file"""
    print("\n💾 Saving text content...")
    with open(TEXT_OUTPUT, 'w', encoding='utf-8') as f:
        for page in text_content:
            f.write(f"\n{'='*80}\n")
            f.write(f"PAGE {page['page']}\n")
            f.write(f"{'='*80}\n\n")
            f.write(page['text'])
            f.write("\n")
    print(f"   ✓ Text saved to: {TEXT_OUTPUT}")

def save_tables_output(tables):
    """Save extracted tables to JSON"""
    print("\n💾 Saving tables...")
    with open(TABLES_OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(tables, f, indent=2)
    print(f"   ✓ Tables saved to: {TABLES_OUTPUT}")

def generate_analysis_report(text_content, tables, num_images, analysis):
    """Generate comprehensive analysis report"""
    print("\n📝 Generating analysis report...")

    report = f"""# Safari User Panel PDF - Analysis Report

**Date**: November 11, 2025
**File**: Safari User Panel.pdf
**Location**: `/mnt/d/Ixora Sites/DRNF_website/Safari User Panel.pdf`
**File Size**: 237 KB

---

## Executive Summary

**Purpose**: {analysis['likely_purpose']}
**Relevance for DRNF Website**: {analysis['relevance_for_drnf']}

### Key Statistics:
- **Total Pages**: {analysis['total_pages']}
- **Total Word Count**: {analysis['word_count']:,}
- **Tables Found**: {analysis['total_tables']}
- **Images Found**: {analysis['total_images']}

### Content Type Analysis:
- **Technical Keywords**: {analysis['content_type_scores']['technical']} occurrences
- **DRNF-Related Keywords**: {analysis['content_type_scores']['drnf_related']} occurrences
- **Safari-Related Keywords**: {analysis['content_type_scores']['safari_related']} occurrences

---

## Recommendation

**{analysis['recommendation']}**

---

## Extracted Content Summary

### Text Content:
"""

    # Add sample text from each page
    for page in text_content[:3]:  # First 3 pages
        first_100_words = ' '.join(page['text'].split()[:100])
        report += f"\n#### Page {page['page']} (First 100 words):\n```\n{first_100_words}...\n```\n"

    if len(text_content) > 3:
        report += f"\n... and {len(text_content) - 3} more pages.\n"

    # Add tables summary
    if tables:
        report += f"\n### Tables:\n"
        for table in tables:
            report += f"\n#### Page {table['page']}, Table {table['table_number']}:\n"
            report += f"- Rows: {len(table['data'])}\n"
            report += f"- Columns: {len(table['data'][0]) if table['data'] else 0}\n"
    else:
        report += f"\n### Tables:\nNo tables found in this PDF.\n"

    # Add images summary
    report += f"\n### Images:\n"
    if num_images > 0:
        report += f"Found {num_images} images in the PDF.\n"
        report += f"Images are embedded within the PDF and would require specialized extraction.\n"
    else:
        report += f"This is a text-only PDF with no embedded images.\n"

    # Add file locations
    report += f"""

---

## Extracted Files

All extracted content has been saved to:
- **Text Content**: `{TEXT_OUTPUT}`
- **Tables (JSON)**: `{TABLES_OUTPUT}`
- **Images**: `{IMAGES_DIR}` (if any were extracted)
- **This Report**: `{ANALYSIS_OUTPUT}`

---

## Next Steps

Based on this analysis:

1. **If HIGH relevance**: Review extracted text and integrate useful content into DRNF website pages
2. **If MEDIUM relevance**: Extract specific DRNF-related sections only
3. **If LOW relevance**: Archive for internal reference, do not publish to website

---

## Full Content

The complete extracted text is available in `safari_content.txt` in this directory.

---

**Extraction Complete**: ✅
**Analysis Status**: Complete
**Ready for Review**: Yes
"""

    with open(ANALYSIS_OUTPUT, 'w', encoding='utf-8') as f:
        f.write(report)

    print(f"   ✓ Analysis report saved to: {ANALYSIS_OUTPUT}")

def main():
    print("=" * 80)
    print("Safari User Panel PDF Extractor")
    print("=" * 80)
    print(f"\nInput: {PDF_PATH}")
    print(f"Output: {OUTPUT_DIR}\n")

    # Extract text
    text_content, num_pages = extract_text_pypdf2()

    # Extract tables
    tables = extract_tables_pdfplumber()

    # Extract images
    num_images = extract_images_pdfplumber()

    # Analyze content
    analysis = analyze_content(text_content, tables, num_images)

    # Save outputs
    save_text_output(text_content)
    if tables:
        save_tables_output(tables)

    # Generate analysis report
    generate_analysis_report(text_content, tables, num_images, analysis)

    print("\n" + "=" * 80)
    print("✅ EXTRACTION COMPLETE!")
    print("=" * 80)
    print(f"\n📊 Summary:")
    print(f"   Pages: {num_pages}")
    print(f"   Tables: {len(tables)}")
    print(f"   Images: {num_images}")
    print(f"   Relevance: {analysis['relevance_for_drnf']}")
    print(f"\n📁 Output Directory: {OUTPUT_DIR}")
    print(f"📄 Analysis Report: {ANALYSIS_OUTPUT}")
    print("\n")

if __name__ == "__main__":
    main()
