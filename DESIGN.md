---
name: Krevia Digital
description: Integrated ERP Solutions and Enterprise Business Systems
colors:
  primary: "#101D35"
  secondary: "#2563EB"
  accent: "#38BDF8"
  gray-900: "#0F172A"
  gray-700: "#334155"
  gray-500: "#64748B"
  gray-300: "#CBD5E1"
  gray-100: "#F1F5F9"
  gray-50: "#F8FAFC"
  semantic-success: "#10B981"
  semantic-warning: "#F59E0B"
  semantic-error: "#EF4444"
  semantic-info: "#8B5CF6"
  gradient: "linear-gradient(to right, #101D35, #38BDF8)"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-dark:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-outline:
    backgroundColor: "transparent"
    borderColor: "{colors.gray-300}"
    textColor: "{colors.gray-900}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  card-surface:
    backgroundColor: "{colors.gray-100}"
    textColor: "{colors.gray-700}"
    rounded: "{rounded.xl}"
    padding: "32px"
---

# Design System: Krevia Digital

## Overview
Krevia Digital's visual language embodies a modern, credible, and trustworthy B2B ERP software and technology company. Built around clarity, engineering precision, and an modern tech aesthetic, it communicates product ambition with a clean, balanced brand color scheme.

## Colors
- **Brand Colors**:
  - **Primary (`#101D35`)**: Deep authoritative Navy used for dark section backgrounds, headers, footers, and dark buttons.
  - **Secondary (`#2563EB`)**: Electric Blue used for Primary Buttons, active icons, and high-impact keyword text highlights.
  - **Accent (`#38BDF8`)**: Sky Blue used for Secondary Buttons, visual links, badges, and accent highlights.
- **Neutral Colors**:
  - **Gray 900 (`#0F172A`)**: Primary text color for maximum legibility.
  - **Gray 700 (`#334155`)**: Secondary text color.
  - **Gray 500 (`#64748B`)**: Muted text for descriptions, dates, and metadata.
  - **Gray 300 (`#CBD5E1`)**: Clean 1px borders and divider lines.
  - **Gray 100 (`#F1F5F9`)**: Primary background for cards and raised surfaces.
  - **Gray 50 (`#F8FAFC`)**: Alternative light background for the canvas and alternating sections.
- **Semantic Colors**:
  - **Success (`#10B981`)**: Positive status, confirmations, active modules.
  - **Warning (`#F59E0B`)**: In-progress indicators, alerts, pending actions.
  - **Error (`#EF4444`)**: Critical errors, validation warnings.
  - **Info (`#8B5CF6`)**: Informational notices, badges.
- **Gradient**:
  - Linear gradient from `#101D35` to `#38BDF8`.

## Typography
- **Primary Typeface**: Plus Jakarta Sans (`next/font/google`), loaded with variable weights (400, 500, 600, 700, 800).
- **Headings**: Tight negative tracking (`-0.025em`), bold or extrabold weight, authoritative sentence casing, colored with Gray 900 (`#0F172A`), with highlighted keywords in Secondary (`#2563EB`).
- **Body**: Generous line-height (`1.6`), balanced measure (max 65ch for reading passages), colored with Gray 700 (`#334155`) or Gray 500 (`#64748B`).

## Layout
- Maximum content width: `max-w-6xl` (1152px) centered with responsive padding (`px-4 sm:px-6 lg:px-8`).
- Section vertical rhythm: `py-16 sm:py-24` with deliberate spacing between major modules.
- Grid systems: 12-column layouts for split hero and spotlight, 2-3 column responsive cards for capabilities and principles.

## Elevation & Depth
- Minimal, clean elevation:
  - Surface elevation: subtle shadow `shadow-sm` or `shadow-md shadow-gray-900/5` combined with crisp 1px borders (`border-gray-300`).
  - Dark container elevation: deep ambient glow `shadow-2xl shadow-slate-950/20` with subtle border `border-gray-700/60`.
- Subtle gradient overlays using the linear brand gradient from `#101D35` to `#38BDF8`.

## Shapes
- Rounded containers: `rounded-2xl` (16px) for cards, `rounded-3xl` (24px) for full-section containers.
- Pills: `rounded-full` for badges, tags, and interactive button actions.
- Input fields: `rounded-xl` with clear focus rings.

## Component Patterns
- **Buttons**:
  - *Primary Button*: Background `#2563EB` (white text) or `#101D35` (white text).
  - *Secondary Button*: Background `#38BDF8` (text `#101D35` or white).
  - *Outline Button*: Transparent/white background, border `#CBD5E1`, text `#0F172A`.
- **Light Sections & Cards**:
  - Background `#F8FAFC` or `#F1F5F9`.
  - Heading `#0F172A` with keywords highlighted in `#2563EB`.
  - Descriptions `#64748B` or `#334155`.
- **Dark Sections**:
  - Background `#101D35`.
  - Headings `#FFFFFF`.
  - Descriptions `#CBD5E1`.
  - Accent icons `#38BDF8`.
