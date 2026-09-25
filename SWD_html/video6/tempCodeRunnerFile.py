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