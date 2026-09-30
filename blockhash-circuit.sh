python3 blockhash-seed.py

if [ $? -eq 0 ]; then
    echo "Python file executed successfully."
else
    echo "Error executing Python file."
    exit 1
fi

cd /media/user/DATADISK/cutline-zu3-n53/cutline-zu3 || exit

make counterorder

if [ $? -eq 0 ]; then
    echo "Make file executed successfully."
else
    echo "Error executing Make file."
    exit 1
fi

cd - || exit