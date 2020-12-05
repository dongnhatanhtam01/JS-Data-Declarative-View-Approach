# JS-Data-Declarative-View-Approach
stream of data, and approach View by data-id data-value

05 dec 2020, :face_with_head_bandage: stay at home covid disease

Guide:

1. First, executing function loadData(), get data  
2. Running render(),   
    - rendering Form in View  
    - attach data.id & data.value to specific element (button Edit and Delete)  
    - data-id data-value  
3. There are tow things inside render() main function  
    - form and submitHandler() event    
        - data is map, return as a list of item and buttons itself  
        - onclick event with $this context  
    - event buttons  
        - function deleteMe(el), function updateMe(el)
        - find element based on id  
        - executing on specific element
        - stores new data  
        - re-render DOM and update View  
