#DCF = (-)Initial Investment + ((cashflow_n)/(1+discount_rate)**n)

Initial_Investment = float(input("Enter the initial investment with a (-): "))

discount_rate = float(input("Enter the discount rate: "))

cashflow = []
while True:
    cashflow_input = input("Enter the cash flow for the year (or type 'done' to finish): ")
    if cashflow_input == 'done':
        break
    cashflow.append(float(cashflow_input))

n = len(cashflow)

DCF = -Initial_Investment
for i in range(n):
      DCF += cashflow[i] / (1 + discount_rate) ** (i + 1)

GREEN = "\033[92m"
RED = "\033[91m"
RESET = "\033[0m"

if DCF > 0:
    print(f"{GREEN}Present Value of DCF: {DCF:.2f}")
else:print(f"{RED}Present Value of DCF: {DCF:.2f}")
    

if DCF > 0:
    print(f"{GREEN}The investment is profitable.{RESET}")
else:
    print(f"{RED}The investment is not profitable.{RESET}")