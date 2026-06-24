#Extract prices, and compile a Excel File
compiled<- data.frame(AAPL_Sim_prices[1:37],AMZN_Sim_prices[1:37],   F_Sim_prices[1:37],
                      GOOG_Sim_prices[1:37],INTC_Sim_prices[1:37],MSFT_Sim_prices[1:37],
                      UIS_Sim_prices[1:37], XOM_Sim_prices[1:37])

install.packages("writexl")
library("writexl")

write_xlsx(compiled,"C:\\Users\\turtl\\OneDrive\\Skrivebord\\Simulatedprices.xlsx")

compiled_2<- data.frame(AAPL_SimRets[1:37],AMZN_SimRets[1:37],   F_SimRets[1:37],
                        GOOG_SimRets[1:37],INTC_SimRets[1:37],MSFT_SimRets[1:37],
                        UIS_SimRets[1:37], XOM_SimRets[1:37])

write_xlsx(compiled_2,"C:\\Users\\turtl\\OneDrive\\Skrivebord\\Simulatedprices_2.xlsx")
