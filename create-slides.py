#!/usr/bin/env python3
"""Generate a 15-slide PowerPoint presentation about career-ops pipeline automation."""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.chart import XL_CHART_TYPE

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

# Color palette
BG_DARK = RGBColor(0x0F, 0x17, 0x2A)
BG_CARD = RGBColor(0x1A, 0x25, 0x3C)
ACCENT_BLUE = RGBColor(0x38, 0xBD, 0xF8)
ACCENT_GREEN = RGBColor(0x4A, 0xDE, 0x80)
ACCENT_PURPLE = RGBColor(0xA7, 0x8B, 0xFA)
ACCENT_ORANGE = RGBColor(0xFB, 0x92, 0x3C)
ACCENT_RED = RGBColor(0xF8, 0x71, 0x71)
ACCENT_YELLOW = RGBColor(0xFA, 0xCC, 0x15)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
GRAY = RGBColor(0x94, 0xA3, 0xB8)
LIGHT_GRAY = RGBColor(0xCB, 0xD5, 0xE1)


def set_slide_bg(slide, color=BG_DARK):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = color


def add_shape(slide, left, top, width, height, fill_color, corner_radius=None):
    shape = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE if corner_radius else MSO_SHAPE.RECTANGLE,
        left, top, width, height
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_color
    shape.line.fill.background()
    if corner_radius:
        shape.adjustments[0] = corner_radius
    return shape


def add_text_box(slide, left, top, width, height, text, font_size=18,
                 color=WHITE, bold=False, alignment=PP_ALIGN.LEFT, font_name="Calibri"):
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(font_size)
    p.font.color.rgb = color
    p.font.bold = bold
    p.font.name = font_name
    p.alignment = alignment
    return txBox


def add_bullet_list(slide, left, top, width, height, items, font_size=16,
                    color=LIGHT_GRAY, bullet_color=ACCENT_BLUE):
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.word_wrap = True
    for i, item in enumerate(items):
        if i == 0:
            p = tf.paragraphs[0]
        else:
            p = tf.add_paragraph()
        p.text = item
        p.font.size = Pt(font_size)
        p.font.color.rgb = color
        p.font.name = "Calibri"
        p.space_after = Pt(8)
        p.level = 0
    return txBox


def add_arrow(slide, left, top, width, height, color=ACCENT_BLUE):
    arrow = slide.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, left, top, width, height)
    arrow.fill.solid()
    arrow.fill.fore_color.rgb = color
    arrow.line.fill.background()
    return arrow


def add_down_arrow(slide, left, top, width, height, color=ACCENT_BLUE):
    arrow = slide.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, left, top, width, height)
    arrow.fill.solid()
    arrow.fill.fore_color.rgb = color
    arrow.line.fill.background()
    return arrow


def add_circle_icon(slide, left, top, size, fill_color, text="", font_size=20):
    shape = slide.shapes.add_shape(MSO_SHAPE.OVAL, left, top, size, size)
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_color
    shape.line.fill.background()
    if text:
        tf = shape.text_frame
        tf.word_wrap = False
        p = tf.paragraphs[0]
        p.text = text
        p.font.size = Pt(font_size)
        p.font.color.rgb = WHITE
        p.font.bold = True
        p.alignment = PP_ALIGN.CENTER
        tf.paragraphs[0].space_before = Pt(0)
    return shape


# ============================================================
# SLIDE 1 — Title
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])  # blank
set_slide_bg(slide)

# Gradient-like decorative bars
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.08), ACCENT_BLUE)
add_shape(slide, Inches(0), Inches(7.42), Inches(13.333), Inches(0.08), ACCENT_PURPLE)

# Left accent bar
add_shape(slide, Inches(0.8), Inches(1.5), Inches(0.08), Inches(2), ACCENT_BLUE)

add_text_box(slide, Inches(1.2), Inches(1.5), Inches(10), Inches(1.2),
             "Automating Your Job Search", font_size=48, bold=True, color=WHITE)
add_text_box(slide, Inches(1.2), Inches(2.6), Inches(10), Inches(0.8),
             "How AI + Pipeline Engineering Can Transform Career Operations",
             font_size=28, color=ACCENT_BLUE)

add_text_box(slide, Inches(1.2), Inches(4.0), Inches(8), Inches(0.5),
             "A real-world system scanning 40+ websites, evaluating roles with AI,",
             font_size=18, color=GRAY)
add_text_box(slide, Inches(1.2), Inches(4.4), Inches(8), Inches(0.5),
             "and generating tailored materials — built on Claude Code",
             font_size=18, color=GRAY)

# Tech badges
badges = [("Claude AI", ACCENT_BLUE), ("Node.js", ACCENT_GREEN), ("YAML Config", ACCENT_PURPLE),
          ("WebSearch API", ACCENT_ORANGE), ("Markdown", GRAY)]
for i, (label, color) in enumerate(badges):
    x = Inches(1.2) + Inches(i * 2.2)
    card = add_shape(slide, x, Inches(5.3), Inches(1.9), Inches(0.5), BG_CARD, 0.05)
    add_text_box(slide, x + Inches(0.15), Inches(5.33), Inches(1.6), Inches(0.4),
                 label, font_size=13, color=color, alignment=PP_ALIGN.CENTER)

add_text_box(slide, Inches(1.2), Inches(6.3), Inches(6), Inches(0.4),
             "Erick G. Rosa  |  PMP, PMI-ACP, SPC6  |  2026",
             font_size=14, color=GRAY)

# ============================================================
# SLIDE 2 — The Problem
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_RED)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "The Problem: Manual Job Search Doesn't Scale", font_size=36, bold=True)

# Pain point cards
pains = [
    ("50+", "Hours/Week", "Average time spent\nmanually searching,\napplying, tracking", ACCENT_RED),
    ("73%", "Jobs Missed", "Qualified candidates\nnever see matching\nroles in time", ACCENT_ORANGE),
    ("85%", "Generic Apps", "Applications sent\nwithout tailoring to\nthe specific role", ACCENT_YELLOW),
    ("2-3 wks", "Response Lag", "Time between posting\nand candidate\ndiscovery", ACCENT_PURPLE),
]
for i, (stat, label, desc, color) in enumerate(pains):
    x = Inches(0.8 + i * 3.1)
    card = add_shape(slide, x, Inches(1.6), Inches(2.8), Inches(3.2), BG_CARD, 0.03)
    add_circle_icon(slide, x + Inches(0.9), Inches(1.9), Inches(1), color, stat, 22)
    add_text_box(slide, x + Inches(0.2), Inches(3.1), Inches(2.4), Inches(0.4),
                 label, font_size=18, bold=True, color=color, alignment=PP_ALIGN.CENTER)
    add_text_box(slide, x + Inches(0.2), Inches(3.6), Inches(2.4), Inches(1),
                 desc, font_size=14, color=GRAY, alignment=PP_ALIGN.CENTER)

add_text_box(slide, Inches(0.8), Inches(5.3), Inches(11.5), Inches(1.2),
             "Knowledge workers deserve the same automation they build for others.\n"
             "What if your job search ran like a CI/CD pipeline — scanning, filtering, scoring, and preparing materials automatically?",
             font_size=18, color=LIGHT_GRAY)

# ============================================================
# SLIDE 3 — The Solution Overview
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_GREEN)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "The Solution: Career-Ops Pipeline", font_size=36, bold=True)
add_text_box(slide, Inches(0.8), Inches(1.1), Inches(10), Inches(0.5),
             "An end-to-end AI-powered job search automation system", font_size=18, color=ACCENT_GREEN)

# Pipeline flow boxes
stages = [
    ("SCAN", "40+ Websites\nSearched", ACCENT_BLUE),
    ("FILTER", "Dedup &\nTitle Match", ACCENT_PURPLE),
    ("EVALUATE", "AI Scoring\n7 Core Strengths", ACCENT_GREEN),
    ("GENERATE", "Reports &\nTailored CVs", ACCENT_ORANGE),
    ("TRACK", "Pipeline\nDashboard", ACCENT_YELLOW),
    ("APPLY", "Human Review\n& Submit", ACCENT_RED),
]
for i, (title, desc, color) in enumerate(stages):
    x = Inches(0.5 + i * 2.1)
    card = add_shape(slide, x, Inches(2.0), Inches(1.8), Inches(2.2), BG_CARD, 0.03)
    # Number badge
    add_circle_icon(slide, x + Inches(0.6), Inches(2.2), Inches(0.6), color, str(i + 1), 16)
    add_text_box(slide, x + Inches(0.1), Inches(2.95), Inches(1.6), Inches(0.4),
                 title, font_size=16, bold=True, color=color, alignment=PP_ALIGN.CENTER)
    add_text_box(slide, x + Inches(0.1), Inches(3.4), Inches(1.6), Inches(0.7),
                 desc, font_size=12, color=GRAY, alignment=PP_ALIGN.CENTER)
    if i < len(stages) - 1:
        add_arrow(slide, x + Inches(1.85), Inches(2.9), Inches(0.25), Inches(0.3), color)

# Bottom stat bar
add_shape(slide, Inches(0.8), Inches(4.8), Inches(11.7), Inches(1.8), BG_CARD, 0.02)
stats = [
    ("740+", "Jobs Evaluated", ACCENT_BLUE),
    ("100+", "Tailored CVs", ACCENT_GREEN),
    ("40+", "Websites Scanned", ACCENT_PURPLE),
    ("12", "Search Queries/Run", ACCENT_ORANGE),
    ("8", "Reports/Batch", ACCENT_YELLOW),
]
for i, (num, label, color) in enumerate(stats):
    x = Inches(1.2 + i * 2.2)
    add_text_box(slide, x, Inches(5.0), Inches(2), Inches(0.6),
                 num, font_size=36, bold=True, color=color, alignment=PP_ALIGN.CENTER)
    add_text_box(slide, x, Inches(5.6), Inches(2), Inches(0.4),
                 label, font_size=14, color=GRAY, alignment=PP_ALIGN.CENTER)

# ============================================================
# SLIDE 4 — System Architecture
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_BLUE)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "System Architecture", font_size=36, bold=True)

# Layer cards
layers = [
    ("Configuration Layer", "profile.yml  |  skills-model.md  |  portals.yml  |  cv.md",
     "Identity, scoring rules, search config, canonical CV", ACCENT_BLUE, 1.5),
    ("Scanning Engine", "WebSearch API  |  Greenhouse API  |  Lever  |  Ashby  |  Dice",
     "Parallel batch queries across 40+ career portals", ACCENT_GREEN, 2.8),
    ("Intelligence Layer", "Claude AI  |  Core Strength Engagement Test  |  Skills Model",
     "7-pillar scoring framework with modifiers and caps", ACCENT_PURPLE, 4.1),
    ("Output Layer", "Reports  |  CVs (HTML/PDF)  |  Tracker  |  Logs",
     "Evaluation reports, tailored resumes, pipeline dashboard", ACCENT_ORANGE, 5.4),
]
for title, tech, desc, color, y in layers:
    card = add_shape(slide, Inches(0.8), Inches(y), Inches(11.7), Inches(1.1), BG_CARD, 0.02)
    # Color left strip
    add_shape(slide, Inches(0.8), Inches(y), Inches(0.08), Inches(1.1), color)
    add_text_box(slide, Inches(1.2), Inches(y + 0.05), Inches(3), Inches(0.4),
                 title, font_size=18, bold=True, color=color)
    add_text_box(slide, Inches(1.2), Inches(y + 0.45), Inches(5), Inches(0.3),
                 tech, font_size=13, color=LIGHT_GRAY, font_name="Consolas")
    add_text_box(slide, Inches(7), Inches(y + 0.25), Inches(5), Inches(0.5),
                 desc, font_size=14, color=GRAY)

# Down arrows between layers
for y in [2.6, 3.9, 5.2]:
    add_down_arrow(slide, Inches(6.4), Inches(y), Inches(0.4), Inches(0.2), ACCENT_BLUE)

# ============================================================
# SLIDE 5 — Configuration & Setup
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_PURPLE)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "Step 1: Configuration — Teaching the AI About You", font_size=36, bold=True)

# Config file cards
configs = [
    ("profile.yml", "Your Identity",
     ["Full name, credentials, contact", "Target roles & archetypes",
      "Compensation requirements", "Deal-breakers & preferences",
      "Location & visa status"], ACCENT_BLUE),
    ("skills-model.md", "Decision Framework",
     ["7 Core Strengths (CS-1 to CS-7)", "Scoring rules & modifiers",
      "Resume generation rules", "Tier ranking (1-4)",
      "De-emphasis rules"], ACCENT_GREEN),
    ("cv.md", "Canonical CV",
     ["Work history with metrics", "Projects & achievements",
      "Certifications & education", "Source of truth — never fabricate",
      "Updated by the candidate only"], ACCENT_PURPLE),
    ("portals.yml", "Search Config",
     ["12 search query templates", "31 tracked companies",
      "Title filters (positive/negative)", "Seniority boost keywords",
      "API endpoints"], ACCENT_ORANGE),
]
for i, (filename, title, items, color) in enumerate(configs):
    x = Inches(0.5 + i * 3.15)
    card = add_shape(slide, x, Inches(1.5), Inches(2.9), Inches(5.2), BG_CARD, 0.03)
    add_shape(slide, x, Inches(1.5), Inches(2.9), Inches(0.06), color)
    add_text_box(slide, x + Inches(0.2), Inches(1.7), Inches(2.5), Inches(0.4),
                 filename, font_size=14, color=color, bold=True, font_name="Consolas")
    add_text_box(slide, x + Inches(0.2), Inches(2.15), Inches(2.5), Inches(0.4),
                 title, font_size=18, bold=True, color=WHITE)
    for j, item in enumerate(items):
        add_text_box(slide, x + Inches(0.2), Inches(2.8 + j * 0.5), Inches(2.5), Inches(0.4),
                     f"  {item}", font_size=12, color=GRAY)

# ============================================================
# SLIDE 6 — Portal Scanning
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_BLUE)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "Step 2: Portal Scanning — 40+ Websites in Parallel", font_size=36, bold=True)

# Website categories
categories = [
    ("Job Board Platforms", ["Greenhouse", "Lever", "Ashby", "LinkedIn", "Dice"], ACCENT_BLUE),
    ("Enterprise Tech", ["IBM", "Microsoft", "AWS", "Google", "Salesforce", "ServiceNow"], ACCENT_GREEN),
    ("Consulting", ["Accenture", "Deloitte", "KPMG", "PwC", "EY", "Booz Allen", "Cognizant"], ACCENT_PURPLE),
    ("Financial Services", ["JPMorgan", "Citi", "Goldman Sachs", "Prudential", "MetLife"], ACCENT_ORANGE),
    ("Healthcare", ["J&J", "Merck", "UnitedHealth"], ACCENT_RED),
    ("AI / Tech", ["Anthropic", "OpenAI", "Palantir", "Glean"], ACCENT_YELLOW),
    ("Government", ["Leidos", "SAIC", "WSP", "AECOM", "Parsons"], GRAY),
]
for i, (cat, sites, color) in enumerate(categories):
    col = i % 4
    row = i // 4
    x = Inches(0.5 + col * 3.15)
    y = Inches(1.5 + row * 2.7)
    card = add_shape(slide, x, y, Inches(2.9), Inches(2.4), BG_CARD, 0.03)
    add_shape(slide, x, y, Inches(2.9), Inches(0.05), color)
    add_text_box(slide, x + Inches(0.15), y + Inches(0.15), Inches(2.6), Inches(0.35),
                 cat, font_size=14, bold=True, color=color)
    for j, site in enumerate(sites):
        sy = y + Inches(0.55 + j * 0.25)
        add_text_box(slide, x + Inches(0.15), sy, Inches(2.6), Inches(0.25),
                     f"  {site}", font_size=11, color=GRAY)

# ============================================================
# SLIDE 7 — How Scanning Works
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_GREEN)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "How Scanning Works: Query to Candidate URL", font_size=36, bold=True)

# Flow diagram
steps_flow = [
    ("1", "Load\nportals.yml", "Read 12 queries\n+ 31 companies", ACCENT_BLUE),
    ("2", "Build Search\nQueries", "site:boards.greenhouse.io\n\"Project Manager\"", ACCENT_PURPLE),
    ("3", "Execute via\nWebSearch API", "Parallel batches\nof 3-4 queries", ACCENT_GREEN),
    ("4", "Parse\nResults", "Extract URLs,\ntitles, snippets", ACCENT_ORANGE),
    ("5", "Dedup vs\nHistory", "Check scan-\nhistory.tsv", ACCENT_YELLOW),
    ("6", "Title\nFilter", "Match positive,\nreject negative", ACCENT_RED),
]
for i, (num, title, desc, color) in enumerate(steps_flow):
    x = Inches(0.4 + i * 2.15)
    card = add_shape(slide, x, Inches(1.6), Inches(1.85), Inches(2.5), BG_CARD, 0.03)
    add_circle_icon(slide, x + Inches(0.6), Inches(1.8), Inches(0.55), color, num, 18)
    add_text_box(slide, x + Inches(0.1), Inches(2.5), Inches(1.65), Inches(0.7),
                 title, font_size=14, bold=True, color=color, alignment=PP_ALIGN.CENTER)
    add_text_box(slide, x + Inches(0.1), Inches(3.2), Inches(1.65), Inches(0.7),
                 desc, font_size=11, color=GRAY, alignment=PP_ALIGN.CENTER)
    if i < len(steps_flow) - 1:
        add_arrow(slide, x + Inches(1.9), Inches(2.6), Inches(0.25), Inches(0.25), color)

# Example query box
add_shape(slide, Inches(0.8), Inches(4.5), Inches(11.7), Inches(2.4), BG_CARD, 0.02)
add_text_box(slide, Inches(1.0), Inches(4.6), Inches(3), Inches(0.4),
             "Example Search Query:", font_size=16, bold=True, color=ACCENT_BLUE)
add_text_box(slide, Inches(1.0), Inches(5.1), Inches(11), Inches(0.6),
             'site:boards.greenhouse.io "Technical Project Manager" OR "Program Manager"\n'
             'OR "Delivery Lead" remote OR "New Jersey" OR "New York"',
             font_size=13, color=ACCENT_GREEN, font_name="Consolas")
add_text_box(slide, Inches(1.0), Inches(5.9), Inches(11), Inches(0.8),
             "Returns: 8-15 results per query  |  Dedup filters ~30% as already seen  |  "
             "Title filter removes ~20% mismatches\n"
             "Net new per scan: ~15-25 unique candidate URLs ready for evaluation",
             font_size=14, color=GRAY)

# ============================================================
# SLIDE 8 — AI Evaluation Engine
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_PURPLE)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "Step 3: AI-Powered Evaluation — The Scoring Engine", font_size=36, bold=True)

# Core Strengths
strengths = [
    ("CS-1", "Enterprise Delivery Scale", "5 teams, 50+ engineers, $3M budget", ACCENT_BLUE),
    ("CS-2", "AWS + Snowflake Platform", "Cloud infrastructure + data migration", ACCENT_GREEN),
    ("CS-3", "DevOps Governance", "40% fewer outages, 70% faster provisioning", ACCENT_PURPLE),
    ("CS-4", "Power BI Dashboards", "Executive reporting for VP/R&D leadership", ACCENT_ORANGE),
    ("CS-5", "Cross-Functional Delivery", "Multi-geo, multi-vendor coordination", ACCENT_YELLOW),
    ("CS-6", "SAFe SPC6 at Scale", "ARTs, PI Planning, Jira Align portfolio", ACCENT_RED),
    ("CS-7", "Regulated Environments", "Pharma R&D + compliance infrastructure", GRAY),
]
for i, (code, name, proof, color) in enumerate(strengths):
    y = Inches(1.4 + i * 0.78)
    card = add_shape(slide, Inches(0.8), y, Inches(7.2), Inches(0.65), BG_CARD, 0.02)
    add_shape(slide, Inches(0.8), y, Inches(0.06), Inches(0.65), color)
    add_text_box(slide, Inches(1.0), y + Inches(0.05), Inches(0.7), Inches(0.35),
                 code, font_size=13, bold=True, color=color, font_name="Consolas")
    add_text_box(slide, Inches(1.8), y + Inches(0.05), Inches(3), Inches(0.35),
                 name, font_size=14, bold=True, color=WHITE)
    add_text_box(slide, Inches(1.8), y + Inches(0.35), Inches(6), Inches(0.25),
                 proof, font_size=11, color=GRAY)

# Scoring rules box
add_shape(slide, Inches(8.5), Inches(1.4), Inches(4.3), Inches(5.4), BG_CARD, 0.02)
add_shape(slide, Inches(8.5), Inches(1.4), Inches(4.3), Inches(0.05), ACCENT_GREEN)
add_text_box(slide, Inches(8.7), Inches(1.55), Inches(4), Inches(0.4),
             "Scoring Rules", font_size=18, bold=True, color=ACCENT_GREEN)
rules = [
    "5-7 CS engaged = 4.0+ score",
    "3-4 CS engaged = 3.0 - 3.9",
    "1-2 CS engaged = 2.0 - 2.9",
    "",
    "Modifiers:",
    "  CS-1 absent  = cap at 3.5",
    "  CS-2 absent  = reduce 0.3",
    "  CS-4 present = add 0.2",
    "  CS-6 required = add 0.2",
    "  Tier 4 primary = cap at 3.0",
]
for j, rule in enumerate(rules):
    c = ACCENT_YELLOW if rule.startswith("  ") else (WHITE if "Modifiers" in rule else LIGHT_GRAY)
    add_text_box(slide, Inches(8.7), Inches(2.1 + j * 0.38), Inches(3.8), Inches(0.35),
                 rule, font_size=12, color=c, font_name="Consolas")

# ============================================================
# SLIDE 9 — Evaluation Example
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_ORANGE)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "Evaluation in Action: Real Scoring Example", font_size=36, bold=True)

# Left: the role card
add_shape(slide, Inches(0.8), Inches(1.5), Inches(5.5), Inches(5.3), BG_CARD, 0.02)
add_shape(slide, Inches(0.8), Inches(1.5), Inches(5.5), Inches(0.05), ACCENT_BLUE)
add_text_box(slide, Inches(1.0), Inches(1.65), Inches(5), Inches(0.4),
             "Rula — Technical Project Manager", font_size=20, bold=True, color=WHITE)
add_text_box(slide, Inches(1.0), Inches(2.1), Inches(5), Inches(0.3),
             "Remote  |  Healthcare (Mental Health)  |  Data Platform TPM",
             font_size=14, color=ACCENT_BLUE)

eval_lines = [
    ("Classification:", "SECONDARY TARGET ROLE", ACCENT_PURPLE),
    ("Resume Selected:", "Technical PM", ACCENT_GREEN),
    ("", "", WHITE),
    ("Core Strengths Engaged:", "", WHITE),
    ("  CS-1", "Enterprise delivery", ACCENT_BLUE),
    ("  CS-2", "Data platform (Snowflake adjacent)", ACCENT_GREEN),
    ("  CS-5", "Cross-functional coordination", ACCENT_YELLOW),
    ("  CS-7", "Healthcare regulated environment", GRAY),
    ("", "", WHITE),
    ("Gaps Identified:", "", WHITE),
    ("  Domain:", "Mental health vs pharma R&D", ACCENT_RED),
    ("  Comp:", "Salary range unclear", ACCENT_ORANGE),
]
for j, (label, val, color) in enumerate(eval_lines):
    y = Inches(2.6 + j * 0.32)
    if label:
        add_text_box(slide, Inches(1.0), y, Inches(2.2), Inches(0.3),
                     label, font_size=12, bold=True, color=color, font_name="Consolas")
    if val:
        add_text_box(slide, Inches(3.2), y, Inches(3), Inches(0.3),
                     val, font_size=12, color=LIGHT_GRAY)

# Right: the score visualization
add_shape(slide, Inches(7), Inches(1.5), Inches(5.5), Inches(5.3), BG_CARD, 0.02)
add_shape(slide, Inches(7), Inches(1.5), Inches(5.5), Inches(0.05), ACCENT_GREEN)
add_text_box(slide, Inches(7.2), Inches(1.65), Inches(5), Inches(0.4),
             "Score Calculation", font_size=20, bold=True, color=WHITE)

calc_steps = [
    ("Base:", "4 CS engaged (CS-1, CS-2, CS-5, CS-7)", "3.5", ACCENT_BLUE),
    ("Modifier:", "CS-1 present (no cap)", "+0.0", ACCENT_GREEN),
    ("Modifier:", "CS-2 present (no reduction)", "+0.0", ACCENT_GREEN),
    ("Modifier:", "CS-4 absent (no bonus)", "+0.0", GRAY),
    ("Modifier:", "Healthcare adjacency bonus", "+0.2", ACCENT_YELLOW),
    ("Modifier:", "Remote-first alignment", "+0.2", ACCENT_PURPLE),
]
for j, (label, desc, score, color) in enumerate(calc_steps):
    y = Inches(2.3 + j * 0.55)
    add_text_box(slide, Inches(7.2), y, Inches(1.5), Inches(0.3),
                 label, font_size=13, bold=True, color=color)
    add_text_box(slide, Inches(8.6), y, Inches(2.5), Inches(0.3),
                 desc, font_size=12, color=LIGHT_GRAY)
    add_text_box(slide, Inches(11.5), y, Inches(0.8), Inches(0.3),
                 score, font_size=13, bold=True, color=color, alignment=PP_ALIGN.RIGHT)

# Final score
add_shape(slide, Inches(7.2), Inches(5.7), Inches(5.1), Inches(0.9), RGBColor(0x16, 0x4E, 0x32), 0.03)
add_text_box(slide, Inches(7.4), Inches(5.8), Inches(3), Inches(0.6),
             "FINAL SCORE", font_size=24, bold=True, color=WHITE)
add_text_box(slide, Inches(10.5), Inches(5.75), Inches(1.5), Inches(0.7),
             "3.9/5", font_size=36, bold=True, color=ACCENT_GREEN, alignment=PP_ALIGN.RIGHT)

# ============================================================
# SLIDE 10 — Report Generation
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_ORANGE)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "Step 4: Report Generation — Structured Decision Support", font_size=36, bold=True)

# Report structure card
add_shape(slide, Inches(0.8), Inches(1.5), Inches(6), Inches(5.3), BG_CARD, 0.02)
add_shape(slide, Inches(0.8), Inches(1.5), Inches(6), Inches(0.05), ACCENT_ORANGE)
add_text_box(slide, Inches(1.0), Inches(1.65), Inches(5), Inches(0.4),
             "Report Contents (Markdown)", font_size=18, bold=True, color=ACCENT_ORANGE)

report_sections = [
    ("Header", "Company, role, URL, date, score, verification status"),
    ("Role Classification", "PRIMARY or SECONDARY target — drives resume selection"),
    ("Core Strength Analysis", "Which of the 7 CS pillars are engaged and how"),
    ("Gap Analysis", "Missing requirements, domain risks, comp concerns"),
    ("Resume Recommendation", "Agile or Technical PM — with reasoning"),
    ("Positioning Strategy", "How to frame experience for this specific role"),
    ("Interview Prep Hooks", "STAR stories mapped to likely interview questions"),
    ("Decision", "Apply / Skip / Monitor — with confidence score"),
]
for j, (section, desc) in enumerate(report_sections):
    y = Inches(2.2 + j * 0.5)
    add_text_box(slide, Inches(1.0), y, Inches(2), Inches(0.3),
                 section, font_size=13, bold=True, color=ACCENT_BLUE)
    add_text_box(slide, Inches(3.0), y, Inches(3.5), Inches(0.4),
                 desc, font_size=12, color=GRAY)

# Right: output files
add_shape(slide, Inches(7.3), Inches(1.5), Inches(5.5), Inches(5.3), BG_CARD, 0.02)
add_shape(slide, Inches(7.3), Inches(1.5), Inches(5.5), Inches(0.05), ACCENT_GREEN)
add_text_box(slide, Inches(7.5), Inches(1.65), Inches(5), Inches(0.4),
             "Generated Outputs", font_size=18, bold=True, color=ACCENT_GREEN)

outputs = [
    ("reports/", "009-rula-tpm-2026-05-19.md", "Evaluation report", ACCENT_BLUE),
    ("batch/", "009-rula.tsv", "Tracker addition row", ACCENT_PURPLE),
    ("output/", "erick-rosa-tpm-rula.pdf", "Tailored resume PDF", ACCENT_GREEN),
    ("jds/", "rula-tpm.md", "Cached JD text", ACCENT_ORANGE),
    ("logs/", "tmp-2026-05-19.md", "Micro-log entry", GRAY),
]
for j, (folder, filename, desc, color) in enumerate(outputs):
    y = Inches(2.3 + j * 0.8)
    add_shape(slide, Inches(7.5), y, Inches(5.1), Inches(0.65), RGBColor(0x12, 0x1D, 0x33), 0.02)
    add_text_box(slide, Inches(7.7), y + Inches(0.05), Inches(1), Inches(0.3),
                 folder, font_size=12, color=color, bold=True, font_name="Consolas")
    add_text_box(slide, Inches(8.6), y + Inches(0.05), Inches(3.5), Inches(0.3),
                 filename, font_size=12, color=LIGHT_GRAY, font_name="Consolas")
    add_text_box(slide, Inches(7.7), y + Inches(0.35), Inches(4.5), Inches(0.25),
                 desc, font_size=11, color=GRAY)

add_text_box(slide, Inches(7.5), Inches(6.4), Inches(5), Inches(0.3),
             "Naming: {###}-{company-slug}-{YYYY-MM-DD}.md",
             font_size=12, color=ACCENT_ORANGE, font_name="Consolas")

# ============================================================
# SLIDE 11 — Resume Tailoring
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_GREEN)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "Step 5: Resume Tailoring — One CV, Many Faces", font_size=36, bold=True)

# Two resume archetypes
for i, (title, subtitle, items, color) in enumerate([
    ("Technical PM Resume", "For TPM, PM, Delivery Lead roles",
     ["Leads with CS-1 + CS-2", "Enterprise delivery + cloud platform",
      "Power BI dashboards, DevOps metrics", "Verisk + Sanofi as lead proof points",
      "PMP + AWS Cloud Practitioner featured"], ACCENT_BLUE),
    ("Agile Resume", "For Agile Coach, Scrum Master roles",
     ["Leads with CS-1 + CS-6", "Enterprise delivery + SAFe SPC6",
      "ART coaching, PI Planning, Jira Align", "Transformation narrative",
      "SPC6 + PMI-ACP + SSM featured"], ACCENT_GREEN),
]):
    x = Inches(0.8 + i * 6.3)
    card = add_shape(slide, x, Inches(1.5), Inches(5.8), Inches(3.5), BG_CARD, 0.02)
    add_shape(slide, x, Inches(1.5), Inches(5.8), Inches(0.05), color)
    add_text_box(slide, x + Inches(0.3), Inches(1.7), Inches(5), Inches(0.4),
                 title, font_size=20, bold=True, color=color)
    add_text_box(slide, x + Inches(0.3), Inches(2.15), Inches(5), Inches(0.3),
                 subtitle, font_size=14, color=GRAY)
    for j, item in enumerate(items):
        add_text_box(slide, x + Inches(0.3), Inches(2.7 + j * 0.4), Inches(5), Inches(0.35),
                     f"  {item}", font_size=13, color=LIGHT_GRAY)

# Rules box
add_shape(slide, Inches(0.8), Inches(5.3), Inches(11.7), Inches(1.5), BG_CARD, 0.02)
add_text_box(slide, Inches(1.0), Inches(5.4), Inches(5), Inches(0.4),
             "Positioning Rules (always enforced)", font_size=16, bold=True, color=ACCENT_YELLOW)
rules_text = [
    "Always lead with CS-1 + CS-2 (or CS-6 for Agile roles)",
    "Never lead with Agile coaching identity in TPM outputs",
    "BTII (current role) always listed last — never used as lead proof point",
    "Every metric comes from cv.md — never fabricated",
]
for j, rule in enumerate(rules_text):
    add_text_box(slide, Inches(1.0), Inches(5.85 + j * 0.28), Inches(11), Inches(0.25),
                 f"  {rule}", font_size=12, color=GRAY)

# ============================================================
# SLIDE 12 — Application Tracking
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_YELLOW)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "Step 6: Pipeline Tracking — Your Job Search Dashboard", font_size=36, bold=True)

# Tracker preview
add_shape(slide, Inches(0.8), Inches(1.5), Inches(11.7), Inches(3.3), BG_CARD, 0.02)
add_shape(slide, Inches(0.8), Inches(1.5), Inches(11.7), Inches(0.05), ACCENT_YELLOW)
add_text_box(slide, Inches(1.0), Inches(1.65), Inches(5), Inches(0.4),
             "applications.md — Pipeline Tracker", font_size=16, bold=True, color=ACCENT_YELLOW)

# Table header
headers = ["#", "Date", "Company", "Role", "Score", "Status", "Report"]
widths = [0.4, 1.0, 1.4, 2.2, 0.7, 1.0, 1.6]
hx = Inches(1.0)
for h, w in zip(headers, widths):
    add_text_box(slide, hx, Inches(2.2), Inches(w), Inches(0.3),
                 h, font_size=11, bold=True, color=ACCENT_BLUE, font_name="Consolas")
    hx += Inches(w + 0.15)

# Sample rows
rows = [
    ("009", "2026-05-19", "Rula", "Technical Project Manager", "3.9/5", "Evaluated", "009-rula-tpm..."),
    ("008", "2026-05-19", "Mercury", "Senior TPM", "3.8/5", "Evaluated", "008-mercury..."),
    ("007", "2026-05-19", "Nava", "Sr. Project Manager", "3.7/5", "Evaluated", "007-nava-sr..."),
    ("011", "2026-05-19", "Neon One", "Agile Delivery Mgr", "3.5/5", "Evaluated", "011-neon-one..."),
]
for ri, row in enumerate(rows):
    ry = Inches(2.6 + ri * 0.35)
    rx = Inches(1.0)
    for val, w in zip(row, widths):
        c = ACCENT_GREEN if "/" in val and "5" in val else LIGHT_GRAY
        add_text_box(slide, rx, ry, Inches(w), Inches(0.3),
                     val, font_size=10, color=c, font_name="Consolas")
        rx += Inches(w + 0.15)

# State flow
add_text_box(slide, Inches(0.8), Inches(5.1), Inches(5), Inches(0.4),
             "Canonical State Flow", font_size=16, bold=True, color=WHITE)
states = [
    ("Evaluated", ACCENT_BLUE), ("Applied", ACCENT_GREEN), ("Responded", ACCENT_PURPLE),
    ("Interview", ACCENT_ORANGE), ("Offer", ACCENT_YELLOW), ("Rejected", ACCENT_RED),
]
for i, (state, color) in enumerate(states):
    x = Inches(0.8 + i * 2.05)
    card = add_shape(slide, x, Inches(5.6), Inches(1.7), Inches(0.6), BG_CARD, 0.03)
    add_shape(slide, x, Inches(5.6), Inches(0.05), Inches(0.6), color)
    add_text_box(slide, x + Inches(0.15), Inches(5.65), Inches(1.5), Inches(0.45),
                 state, font_size=13, bold=True, color=color, alignment=PP_ALIGN.CENTER)
    if i < len(states) - 1:
        add_arrow(slide, x + Inches(1.75), Inches(5.75), Inches(0.25), Inches(0.2), GRAY)

# Integrity tools
add_shape(slide, Inches(0.8), Inches(6.5), Inches(11.7), Inches(0.7), BG_CARD, 0.02)
tools_text = ("Integrity Tools:   verify-pipeline.mjs (health check)   |   "
              "merge-tracker.mjs (TSV merge)   |   normalize-statuses.mjs   |   dedup-tracker.mjs")
add_text_box(slide, Inches(1.0), Inches(6.55), Inches(11), Inches(0.5),
             tools_text, font_size=12, color=GRAY, font_name="Consolas")

# ============================================================
# SLIDE 13 — The Human-in-the-Loop: Apply & Respond
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_RED)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "Step 7: Human-in-the-Loop — Apply & Respond", font_size=36, bold=True)
add_text_box(slide, Inches(0.8), Inches(1.1), Inches(10), Inches(0.5),
             "The AI prepares everything — YOU make the final call", font_size=18, color=ACCENT_RED)

# Left: What AI does
add_shape(slide, Inches(0.8), Inches(1.8), Inches(5.5), Inches(4.8), BG_CARD, 0.02)
add_shape(slide, Inches(0.8), Inches(1.8), Inches(5.5), Inches(0.05), ACCENT_GREEN)
add_text_box(slide, Inches(1.0), Inches(1.95), Inches(5), Inches(0.4),
             "What the AI Prepares", font_size=18, bold=True, color=ACCENT_GREEN)
ai_items = [
    "Tailored resume PDF matched to the role",
    "Cover letter draft (if required)",
    "Application form pre-fill (company, role, links)",
    "Screening question answers from cv.md proof points",
    "Recruiter email draft with positioning strategy",
    "LinkedIn connection message draft",
    "Interview prep: STAR stories mapped to likely questions",
    "Salary negotiation scripts with market data",
]
for j, item in enumerate(ai_items):
    add_text_box(slide, Inches(1.0), Inches(2.5 + j * 0.45), Inches(5), Inches(0.4),
                 f"  {item}", font_size=13, color=LIGHT_GRAY)

# Right: What human does
add_shape(slide, Inches(7), Inches(1.8), Inches(5.5), Inches(4.8), BG_CARD, 0.02)
add_shape(slide, Inches(7), Inches(1.8), Inches(5.5), Inches(0.05), ACCENT_ORANGE)
add_text_box(slide, Inches(7.2), Inches(1.95), Inches(5), Inches(0.4),
             "What YOU Decide", font_size=18, bold=True, color=ACCENT_ORANGE)
human_items = [
    "Review the evaluation report and score",
    "Decide: Apply, Skip, or Monitor?",
    "Review and edit the tailored resume",
    "Personalize the cover letter / email",
    "Click Submit on the application portal",
    "Send the recruiter email / LinkedIn message",
    "Update status: Applied, Responded, Interview...",
    "Override the AI if your judgment differs",
]
for j, item in enumerate(human_items):
    add_text_box(slide, Inches(7.2), Inches(2.5 + j * 0.45), Inches(5), Inches(0.4),
                 f"  {item}", font_size=13, color=LIGHT_GRAY)

# Safety rule callout
add_shape(slide, Inches(0.8), Inches(6.8), Inches(11.7), Inches(0.5),
          RGBColor(0x3B, 0x18, 0x18), 0.02)
add_text_box(slide, Inches(1.0), Inches(6.83), Inches(11), Inches(0.4),
             "SAFETY RULE: The system NEVER auto-submits applications. Quality over quantity — every application a human reads costs someone's attention.",
             font_size=13, bold=True, color=ACCENT_RED)

# ============================================================
# SLIDE 14 — Results & Metrics
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_GREEN)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "Real Results: What This System Delivered", font_size=36, bold=True)

# Big metrics row
metrics = [
    ("740+", "Jobs Evaluated", "Across 6+ months\nof automated scanning", ACCENT_BLUE),
    ("100+", "Tailored CVs", "Each one customized\nto the specific role", ACCENT_GREEN),
    ("40+", "Portals Scanned", "Enterprise, consulting,\nfinance, healthcare, AI", ACCENT_PURPLE),
    ("0", "Spam Applications", "Every submission was\nhuman-reviewed first", ACCENT_RED),
]
for i, (num, label, desc, color) in enumerate(metrics):
    x = Inches(0.5 + i * 3.2)
    card = add_shape(slide, x, Inches(1.5), Inches(2.9), Inches(2.5), BG_CARD, 0.03)
    add_text_box(slide, x + Inches(0.2), Inches(1.7), Inches(2.5), Inches(0.7),
                 num, font_size=42, bold=True, color=color, alignment=PP_ALIGN.CENTER)
    add_text_box(slide, x + Inches(0.2), Inches(2.3), Inches(2.5), Inches(0.4),
                 label, font_size=16, bold=True, color=WHITE, alignment=PP_ALIGN.CENTER)
    add_text_box(slide, x + Inches(0.2), Inches(2.8), Inches(2.5), Inches(0.7),
                 desc, font_size=12, color=GRAY, alignment=PP_ALIGN.CENTER)

# Time savings
add_shape(slide, Inches(0.8), Inches(4.3), Inches(11.7), Inches(2.8), BG_CARD, 0.02)
add_text_box(slide, Inches(1.0), Inches(4.4), Inches(5), Inches(0.4),
             "Time Investment Comparison", font_size=18, bold=True, color=ACCENT_YELLOW)

# Manual vs automated bars
add_text_box(slide, Inches(1.0), Inches(5.0), Inches(2), Inches(0.35),
             "Manual Search:", font_size=14, color=ACCENT_RED)
add_shape(slide, Inches(3.2), Inches(5.0), Inches(8.5), Inches(0.35), ACCENT_RED, 0.02)
add_text_box(slide, Inches(3.4), Inches(5.0), Inches(8), Inches(0.35),
             "50+ hours/week — searching, reading JDs, tailoring resumes, tracking, following up",
             font_size=11, color=WHITE)

add_text_box(slide, Inches(1.0), Inches(5.6), Inches(2), Inches(0.35),
             "With Pipeline:", font_size=14, color=ACCENT_GREEN)
add_shape(slide, Inches(3.2), Inches(5.6), Inches(2.5), Inches(0.35), ACCENT_GREEN, 0.02)
add_text_box(slide, Inches(3.4), Inches(5.6), Inches(2.3), Inches(0.35),
             "~5 hrs/week — review + apply",
             font_size=11, color=WHITE)

add_text_box(slide, Inches(1.0), Inches(6.2), Inches(11), Inches(0.5),
             "90% reduction in search/eval time  |  Higher quality applications  |  "
             "Better role-candidate fit  |  Zero missed opportunities",
             font_size=14, bold=True, color=ACCENT_YELLOW)

# ============================================================
# SLIDE 15 — Getting Started / Call to Action
# ============================================================
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(slide)
add_shape(slide, Inches(0), Inches(0), Inches(13.333), Inches(0.06), ACCENT_BLUE)
add_shape(slide, Inches(0), Inches(7.44), Inches(13.333), Inches(0.06), ACCENT_PURPLE)

add_text_box(slide, Inches(0.8), Inches(0.4), Inches(10), Inches(0.8),
             "Build Your Own Career-Ops Pipeline", font_size=36, bold=True)
add_text_box(slide, Inches(0.8), Inches(1.1), Inches(10), Inches(0.5),
             "Everything you need to get started", font_size=18, color=ACCENT_GREEN)

# Steps to get started
steps = [
    ("1", "Install Claude Code", "CLI tool that powers the entire pipeline\nclaude.ai/code — free to start", ACCENT_BLUE),
    ("2", "Write Your CV", "Markdown format — your source of truth\nMetrics, achievements, proof points", ACCENT_GREEN),
    ("3", "Define Your Profile", "Target roles, comp, location, deal-breakers\nYAML config — easy to update", ACCENT_PURPLE),
    ("4", "Configure Portals", "Add companies and job boards you care about\n40+ pre-configured — customize for your field", ACCENT_ORANGE),
    ("5", "Run Your First Scan", "Paste a URL or run the scanner\nThe AI handles evaluation, scoring, and reports", ACCENT_YELLOW),
]
for i, (num, title, desc, color) in enumerate(steps):
    y = Inches(1.8 + i * 0.95)
    card = add_shape(slide, Inches(0.8), y, Inches(7), Inches(0.8), BG_CARD, 0.02)
    add_circle_icon(slide, Inches(1.0), y + Inches(0.1), Inches(0.55), color, num, 18)
    add_text_box(slide, Inches(1.8), y + Inches(0.02), Inches(2.5), Inches(0.35),
                 title, font_size=16, bold=True, color=color)
    add_text_box(slide, Inches(4.2), y + Inches(0.02), Inches(3.5), Inches(0.7),
                 desc, font_size=11, color=GRAY)

# Right: Key principles
add_shape(slide, Inches(8.3), Inches(1.8), Inches(4.5), Inches(4.75), BG_CARD, 0.02)
add_shape(slide, Inches(8.3), Inches(1.8), Inches(4.5), Inches(0.05), ACCENT_BLUE)
add_text_box(slide, Inches(8.5), Inches(1.95), Inches(4), Inches(0.4),
             "Core Principles", font_size=18, bold=True, color=ACCENT_BLUE)

principles = [
    ("Quality > Quantity", "5 great applications beat\n50 generic ones"),
    ("Human-in-the-Loop", "AI prepares, you decide\nand submit"),
    ("Fully Customizable", "Change archetypes, scoring,\nportals — it's YOUR system"),
    ("Open Source", "Fork it, modify it,\nmake it yours"),
]
for j, (title, desc) in enumerate(principles):
    y = Inches(2.5 + j * 0.95)
    add_text_box(slide, Inches(8.5), y, Inches(4), Inches(0.35),
                 title, font_size=14, bold=True, color=ACCENT_GREEN)
    add_text_box(slide, Inches(8.5), y + Inches(0.35), Inches(4), Inches(0.5),
                 desc, font_size=12, color=GRAY)

# Bottom CTA
add_shape(slide, Inches(0.8), Inches(6.5), Inches(11.7), Inches(0.7),
          RGBColor(0x0C, 0x2D, 0x48), 0.03)
add_text_box(slide, Inches(1.0), Inches(6.55), Inches(11), Inches(0.5),
             "github.com/santifer/career-ops  |  Built with Claude Code  |  "
             "Your job search deserves engineering discipline",
             font_size=16, bold=True, color=ACCENT_BLUE, alignment=PP_ALIGN.CENTER)

# ============================================================
# Save
# ============================================================
prs.save('/home/user/career-ops/Career-Ops-Pipeline-Presentation.pptx')
print("Done — 15 slides saved.")
