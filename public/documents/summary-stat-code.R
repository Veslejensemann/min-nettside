# Load libraries
library(readxl)    # Package for reading Excel files
library(dplyr)     # Package for data manipulation
library(writexl)   # Package for writing Excel files

# File names
filenames <- c("outputSMB.xlsx", "outputHML.xlsx", "outputRWM.xlsx", "outputCMA.xlsx", "outputESG.xlsx")

# Initialize a list to store results
results <- list()

# Loop through each file
for (filename in filenames) {
  data <- data.frame()
  
  # Loop through each year (sheet name)
  for (year in 2002:2022) {
    # Read the value from cell B16
    value <- read_excel(filename, sheet = as.character(year), range = "B16", col_names = FALSE)
    
    # Add the value to the data.frame
    data <- rbind(data, data.frame(year = year, Value = as.numeric(value)))
  }
  
  # Calculate summary statistics
  stats <- data %>%
    summarise(
      Mean = mean(Value, na.rm = TRUE),
      STD = sd(Value, na.rm = TRUE),
      Minimum = min(Value, na.rm = TRUE),
      Maximum = max(Value, na.rm = TRUE),
      Observations = n()
    )
  
  # Add the result to the list
  results[[filename]] <- stats
}

# Combine all results into a table
final_results <- bind_rows(results, .id = "File")

# Save the results to an Excel file
write_xlsx(final_results, "summar stat.xlsx")

# Print the results
print(final_results)