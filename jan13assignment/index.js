let matrix = [
    [1, 2, 3, 4],
    [6, 1, 4, 9],
    [3, 6, 4, 6],
    [7, 2, 4, 3],
];

var sum = 0;

for (var i = 0; i < matrix.length; i++) {

    document.write("<br/> ");


    for (j = 0; j < matrix[i].length; j++) {

        document.write(matrix[i][j]);
        document.write("\n ");


        if (matrix[i] == matrix[j]) {
            sum = sum + matrix[i][j];

        }
    }

}

document.write("<br/>");
document.write("<br/>");
document.write(`The sum of the diagonal elements of an array is :  ${sum}`);