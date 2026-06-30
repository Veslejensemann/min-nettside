import csv

resultater = [] #lage liste til senere

with open('aksjedata_oslo_bors.csv', mode='r') as file: #Åpne fil
    for row in csv.DictReader(file):
            avkastning = (float(row["kurs_i_dag"]) - float(row["kurs_30d_siden"])) / float(row["kurs_30d_siden"]) * 100 #Gjør utregning basert på kolonnene i csv filen 
            resultater.append((row["ticker"], avkastning))

resultater.sort(key=lambda x: x[1], reverse=True) #Sorterer listen basert på avkastning i synkende rekkefølge 

for ticker, avkastning in resultater[:5]: #Printer de 5 beste aksjene, med avstand 5, og 2 desimaler
        print(f"{ticker:<5} {avkastning:.2f}%")
