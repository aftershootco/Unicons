#!/bin/bash

# Specify the folder containing SVG files
SVG_FOLDER="./src/svg"
FOLDER_PATH="./test"
mkdir $FOLDER_PATH
# Loop through all files with the .svg extension in the folder
for svg_file in "$SVG_FOLDER"/*.svg; do
    echo "\n\n\nProcessing file: $svg_file"
    # Print the content of the SVG file
    #!/bin/bash
    FILE_NAME=$(basename -- "$svg_file")
    FILE_NAME="${FILE_NAME%.*}"
    # CAP_FILE_NAME="$(tr '[:lower:]' '[:upper:]' <<< ${FILE_NAME:0:1})${FILE_NAME:1}"
    # Replace hyphens with camel case in the file name
 
    CAP_FILE_NAME=$(echo "$FILE_NAME" |  awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));}1' FS='[_-]' OFS='')


  # Specify the file path for the TypeScript file
    TS_FILE_PATH="$FOLDER_PATH/$CAP_FILE_NAME"
    C="Icon.tsx"
    TS_FILE_PATH+="$C"
    # echo $TS_FILE_PATH
  # Specify the file path
    touch $TS_FILE_PATH
    FILE_PATH=$TS_FILE_PATH

    I="Icon"
    CAP_FILE_NAME+="$I"

    # Use echo with a here document to insert the content
    echo "import React from 'react'" > "$FILE_PATH"
    echo "import { IconProps } from '../../types/Icons/types'" >> "$FILE_PATH"
    echo "import BaseIcon from '../components/BaseIcon'" >> "$FILE_PATH"
    echo "import DEFAULT_ICON from '../constant'" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"

    echo "type IconVariant = 'primary' | 'secondary' | 'tertiary';" >> "$FILE_PATH"

    echo "type Props = Omit<IconProps, 'variant'> & {" >> "$FILE_PATH"
    echo "  variant?: IconVariant;" >> "$FILE_PATH"
    echo "  bgColor?: string;" >> "$FILE_PATH"
    echo "  inActive?: boolean;" >> "$FILE_PATH"
    echo "};" >> "$FILE_PATH"


    echo "" >> "$FILE_PATH"
    echo "export const $CAP_FILE_NAME = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {" >> "$FILE_PATH"
    echo "  //props" >> "$FILE_PATH"
    echo "  const {" >> "$FILE_PATH"
    echo "    variant = 'primary'," >> "$FILE_PATH"
    echo "    color = DEFAULT_ICON.COLOR," >> "$FILE_PATH"
    echo "    bgColor = DEFAULT_ICON.BG_COLOR," >> "$FILE_PATH"
    echo "    size = DEFAULT_ICON.SIZE," >> "$FILE_PATH"
    echo "    inActive = false," >> "$FILE_PATH"
    echo "    ...restProps" >> "$FILE_PATH"
    echo "  } = props" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "  const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "  // variants" >> "$FILE_PATH"
    echo "  const primary = (" >> "$FILE_PATH"
    # Add your existing content here

    cat $svg_file >> $FILE_PATH

    echo ")" >> "$FILE_PATH"
    echo "  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />" >> "$FILE_PATH"
    echo "})" >> "$FILE_PATH"
    echo "" >> "$FILE_PATH"
    echo "export default React.memo($CAP_FILE_NAME)" >> "$FILE_PATH"
done

