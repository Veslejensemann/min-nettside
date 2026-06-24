library(readxl)
Stock_Price_Data_2023_post <- read_excel("Stock_Price_Data_2023_post.xlsx")
View(Stock_Price_Data_2023_post)

# Define the column names for the companies
companies <- c("AAPL", "AMZN", "F", "GOOG", "MSFT", "UIS", "XOM")

# Loop through each company and save its data as a separate CSV file
for (company in companies) {
  # Select the Date and company columns
  subset_data <- Stock_Price_Data_2023_post[c("Date", company)]
  # Set the file name
  filename <- paste0("Date", company, ".csv")
  # Save the data as a CSV file
  write.csv(subset_data, filename, row.names = FALSE)
}
