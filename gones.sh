#!/bin/bash

# Check if the variable is provided as a command-line argument
if [ -z "$1" ]; then
    echo "Usage: $0 VARIABLE_NAME"
    exit 1
fi

# Use the provided variable
VARIABLE="$1"

# Replace "ArrowFillIcon" with the variable in the code and save it to a new file
sed "s/COMP/$VARIABLE/g" template.stories.tsx > ./src/stories/"$VARIABLE".stories.tsx

# Give write permissions to the user for the new file
chmod u+w ./src/stories/"$VARIABLE".stories.tsx


# run this - sudo ./genstory.sh -NameOfTheComponent-