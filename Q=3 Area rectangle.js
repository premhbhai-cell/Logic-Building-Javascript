function calculateArea(length, width) {

    const area = length * width;
    console.log("Area of rectangle" + " ", area);
}
calculateArea(5, 10);
calculateArea(200, 350);
calculateArea(-2, 10); // This will give a negative area, which is not valid for a rectangle.   





function calculateArea(length, width) {
    if (length <= 0 || width <= 0) {
        console.log("Length and width must be positive numbers.");
        return;
    }

    const area = length * width;
    console.log("Area of rectangle" + " ", area);
}
calculateArea(5, 10);
calculateArea(200, 350);
calculateArea(-2, 10); // This will give a negative area, which is not valid for a rectangle.   
