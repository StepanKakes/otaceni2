stred=[2,2]
A=[0,0]
B=[1,1]

def display():
    global stred,A,B
    basic.clear_screen()
    led.plot(A[0], A[1])
    led.plot(B[0], B[1])
    led.plot_brightness(stred[0], stred[1], 100)



def pohyb():
    x=[0,1]
    number=[2,1]
    counter=0
    for v in range(8):
        basic.pause(300)
        display()
        if counter % 2==0:
            x.reverse()
        if counter==4:
           number[0]=-abs(number[0])
           number[1]=-abs(number[1])
        counter+=1
        A[x[0]]=A[x[0]]+number[0]
        B[x[0]]=B[x[0]]+number[1]
        print(counter)
        print(A)
        


def on_forever():
     pohyb()
basic.forever(on_forever)
