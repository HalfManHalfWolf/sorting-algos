<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset = "UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Bubble Sort Vizualisation

                </title>
                <style>
                    body {
                        font-family:Ariel, sans serif ;
                        text-align: corner;
            
                    }
                   # array-container {
                    margin-top:20px
                   }
                   .array.bar {
                    display: inline-block;
                    background-color: dodgerblue;
                    margin-right: 2px;

                   }
                </style>

        
    </head>
    <body>
        <h1>Bubble Sort Vizualisation</h1>
        <div>
            <label for="array-input">Enter numbers(comma-seperated):</label>
            <input type="text" id="array-input">
                <button onclick="sortArray()">Sort</button>
        </div>
        <script>
            function sortArray() {
                const inputArray = document.hetElementById("array-input").value
                .split(',')
                .map(num => parseInt(num));
                bubbleSort(inputArray);
            }
            async function bubbleSort(arr)
{
    const container = document.getElementById("array-container");
    for(let i = 0;i<Array.lemgth-1;i++){
        for(let j = 0;j<Array.length-1-i;j++);{
            displayArray(container, arr,j,j+1);
            await sleep(1000)
            if(arr[j]>arr[j+1]) {
                let temp= arr[j];
                arr[j]= arr[j+1];
                arr[j]= temp;
                displayArray(container,arr);
            }
        }
    }
}        
function displayArray(container, arr, index1 =-1, index2 = -1) {
    container.innerhtml = arr.map(num,index) => {
        let className= 'array-bar';
        if(index === index1 || index ===index2) {
            className +='selected';

        }
        return '<div class="${className}" style="height:${num * 5px};width:20px;"></div>';

    }
    
}
function sleep(ms) {
        return new Promise (resolve => setTimeout(resolve, ms));
    }
</script>
    </body>
</html>
