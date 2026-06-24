# Load packages
library(readxl)      # Package for reading Excel files
library(tidyverse)   # Package for data manipulation and visualization
library(writexl)     # Package for writing Excel files

# Read data from Excel file
data <- read_excel("ESG.xlsx")

# Clean column names
colnames(data) <- make.names(colnames(data))

# Function to extrapolate missing data using linear regression
fill_missing_data <- function(df) {
  # Check for each column
  for (col in colnames(df)[-1]) { # first column is year
    # Get available data for the column
    available_data <- df %>% filter(!is.na(.data[[col]]))
    
    # Continue only if there is enough data to build a model
    if (nrow(available_data) >= 2) { # At least two points are required for linear regression
      # Build a linear regression model
      model <- lm(as.formula(paste(col, "~ year")), data = available_data)
      
      # Find missing years
      missing_years <- df %>% filter(is.na(.data[[col]])) %>% select(year)
      
      if (nrow(missing_years) > 0) {
        # Predict the missing values
        predictions <- predict(model, newdata = missing_years)
        
        # Insert the predicted values into the dataframe
        df <- df %>% mutate(!!sym(col) := ifelse(is.na(.data[[col]]), predictions[match(year, missing_years$year)], .data[[col]]))
      }
    }
  }
  return(df)
}

# Apply the function to the dataset
data_filled <- fill_missing_data(data)

# Print the updated dataframe
print(data_filled)

# Write DataFrame to an Excel file
write_xlsx(data_filled, "ESGreg.xlsx")