
# def greet(fx):
#     def mfx():
#         print("Good Morning")
#         fx()
#         print("Thank You for Your Time.")
#     return mfx

# @greet
# def hello():
#     print("Hello world")

# hello()


# def greets(fx):
#     def mfx():
#         print("My name is Anthuni")
#         fx()
#         print("Thank you for your time")
#     return mfx

# @greets
# def hello_world():
#     print("Hello world")


# hello_world()


def greet(fx):
    def mfx(*args,**kwargs):
        print("Good Morning!")
        fx(*args,**kwargs)
        print("Thanks for using this function.")
    return mfx

@greet
def add(a,b):
    print(a+b)
    return a + b

add(1,10)


def log_argument(func):
    def wrapper(*args,**kwargs):
        print("Arguments: ",args,kwargs)
        result = func(*args,**kwargs)
        print("Results: ",result)
        return result
    return wrapper


@log_argument
def add(a,b,c,d,e,f):
    return a+b+c+d+e+f

add(1,2,3,4,5,f = 6)


def double_result(func):
    def wrap(*args,**kwargs):
        result = func(*args,**kwargs)
        return result * 2
    return wrap

@double_result 
def square(a):
    return a ** 2

print("Result: " , square(5))

# Multiple stack decorators

def bold(func):
    def wrap():
        return "<b>" + func() + "</b>"
    return wrap


def italic(func):
    def wrap():
        return "<i>"+func()+"</i>"
    return wrap

@bold
@italic
def func_text():
    return "Python is an easy language"


print("Result: ", func_text())


# classes and objects in python oops object oriented programming

class Car():
    wheels = 4
    def __init__(self,brand,color):
        self.brand = brand
        self.color = color

    def start(self):
        print("Car started!")

    def stop(self):
        print("Car Stopped")
car1 = Car("audi","yellow")
car2 = Car("BMW","blue")
print(car1.wheels)
(car1.start())
print(car1.color)

car2.stop()
car1.stop()
print(car2.wheels,car2.color , car2.brand)


# class for student management system first phase
class Student():
    def __init__(self,name,marks):
        # Constructor = when the object is first created , intialized (init)
        self.name = name
        self.marks = marks
        print(f"Constructor called for {self.name}")
    def percentage(self):
        print("Percentage: ", self.marks/500 * 100 , "%")

    def show(self):
        print(f"Name of student is {self.name}. Marks obtained by him/her : {self.marks}")

    def __del__(self):
        # Destructor = Called when object is deleted or the program ends
        print(f"Destructor called for {self.name}")


s1 = Student("Omprakash Chaudhary",485)
s2 = Student("Hemant Kumar Chaudhary",495)
# print(s1.name, s1.marks)
s1.show()
s1.percentage()
s2.percentage()
s2.show()
s1.name = "Raju Rastogi"
print(s1.name)


class Car:
    def __init__(self,brand,costing):
        self.brand = self.brand
        self.costing = costing