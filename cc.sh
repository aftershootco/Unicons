#!/bin/bash

# Check if the variable is provided as a command-line argument
if [ -z "$1" ]; then
    echo "Usage: $0 NEW_COMPONENT_NAME"
    exit 1
fi

# Use the provided variable
NEW_COMPONENT_NAME="$1"
TEMPLATE_FILE="component.tsx"
SOURCE_SVG="source.svg"
ICONS_FOLDER="src/icons"

# Create a new folder called 'icons' if it doesn't exist
mkdir -p "$ICONS_FOLDER"

# Replace the content of the template with the content of source.svg
awk -v svgfile="$SOURCE_SVG" '/<\/svg>/{system("cat " svgfile);next}1' "$TEMPLATE_FILE" > "$ICONS_FOLDER/$NEW_COMPONENT_NAME.tsx"

# Replace occurrences of 'componentName' with the provided component name
sed -i "s/componentName/$NEW_COMPONENT_NAME/g" "$ICONS_FOLDER/$NEW_COMPONENT_NAME.tsx"

echo "New component created: $ICONS_FOLDER/$NEW_COMPONENT_NAME.tsx"
