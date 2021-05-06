# parking-lot-program

#after run the program
create_parking_lot:-6
[ 0, 0, 0, 0, 0, 0 ]
give a input    
    EX.:-       
        status, 
        leave 4,
        park KA01HH1234 White,
        registration_numbers_for_cars_with_colour White,
        slot_numbers_for_cars_with_colour White,
        slot_number_for_registration_number KA01HH3141,
        exit
input:-park KA01HH1234 White
Allocated slot number: 0

input:-park KA01HH9999 White
Allocated slot number: 1

input:-park KA01BB0001 Black
Allocated slot number: 2

input:-park KA01HH7777 Red
Allocated slot number: 3

input:-park KA01HH2701 Blue
Allocated slot number: 4

input:-park KA01HH3141 Black
Allocated slot number: 5

input:-leave 4
Slot number 4 is free

input:-park KA01P333 White
Allocated slot number: 4

input:-park DL12AA9999 White
Sorry,parking lot is full 

input:-status
0 park KA01HH1234 White
1 park KA01HH9999 White
2 park KA01BB0001 Black
3 park KA01HH7777 Red
4 park KA01P333 White
5 park KA01HH3141 Black

input:-registration_numbers_for_cars_with_colour White
KA01HH1234
KA01HH9999

input:-slot_numbers_for_cars_with_colour White
0
1
4

input:-slot_number_for_registration_number KA01HH3141
5

input:-slot_number_for_registration_number MH04AY1111
Not Fount
