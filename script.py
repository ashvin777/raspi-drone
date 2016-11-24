import sys, json

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    return lines[0]

def main():
    lines = read_in()
    print(lines)


#start process
if __name__ == '__main__':
    main()
