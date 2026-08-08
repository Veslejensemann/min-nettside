"""
Monte Carlo-simulering av en kasses (kapitals) utvikling over tid.
 
Modell: Geometrisk brownsk bevegelse (GBM) med månedlige steg,
pluss et valgfritt fast månedlig innskudd.
 
Kjør i VS Code: åpne filen og trykk "Run Python File" (eller `python montecarlo_kasse.py` i terminalen).
Krever: numpy og matplotlib  ->  pip install numpy matplotlib
"""
 
import numpy as np
import matplotlib.pyplot as plt
 
 
def hent_input(tekst: str) -> float:
    svar = input(f"{tekst}: ").strip().replace(",", ".")
    return float(svar)
 
 
def main():
    print("=== Monte Carlo-simulering av kapitalutvikling ===\n")
 
    startkapital = hent_input("Startkapital (kr)")
    innskudd_mnd = hent_input("Månedlig innskudd (kr)")
    avkastning = hent_input("Forventet årlig avkastning (%)") / 100
    volatilitet = hent_input("Årlig volatilitet / standardavvik (%)") / 100
    antall_aar = int(hent_input("Antall år"))
    antall_sim = int(hent_input("Antall simuleringer"))
 
    steg_per_aar = 12
    n_steg = antall_aar * steg_per_aar
    dt = 1 / steg_per_aar
 
    # GBM: S(t+dt) = S(t) * exp((mu - 0.5*sigma^2)*dt + sigma*sqrt(dt)*Z)
    rng = np.random.default_rng()
    Z = rng.standard_normal((antall_sim, n_steg))
    vekstfaktor = np.exp(
        (avkastning - 0.5 * volatilitet**2) * dt + volatilitet * np.sqrt(dt) * Z
    )
 
    baner = np.empty((antall_sim, n_steg + 1))
    baner[:, 0] = startkapital
    for t in range(n_steg):
        baner[:, t + 1] = baner[:, t] * vekstfaktor[:, t] + innskudd_mnd
 
    sluttverdier = baner[:, -1]
 
    # Resultater
    p5, p50, p95 = np.percentile(sluttverdier, [5, 50, 95])
    totalt_innskutt = startkapital + innskudd_mnd * n_steg
 
    print("\n--- Resultat etter", antall_aar, "år ---")
    print(f"Totalt innskutt:      {totalt_innskutt:>15,.0f} kr")
    print(f"Gjennomsnitt:         {sluttverdier.mean():>15,.0f} kr")
    print(f"Median (50 %):        {p50:>15,.0f} kr")
    print(f"Pessimistisk (5 %):   {p5:>15,.0f} kr")
    print(f"Optimistisk (95 %):   {p95:>15,.0f} kr")
    print(f"Sannsynlighet for tap: {np.mean(sluttverdier < totalt_innskutt) * 100:.1f} %")
 
    # Plott
    tid = np.arange(n_steg + 1) / steg_per_aar
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(13, 5))
 
    # Vis maks 100 baner for lesbarhet
    for bane in baner[: min(100, antall_sim)]:
        ax1.plot(tid, bane, linewidth=0.5, alpha=0.3, color="steelblue")
    ax1.plot(tid, np.percentile(baner, 50, axis=0), color="black", label="Median")
    ax1.plot(tid, np.percentile(baner, 5, axis=0), color="red", linestyle="--", label="5 %")
    ax1.plot(tid, np.percentile(baner, 95, axis=0), color="green", linestyle="--", label="95 %")
    ax1.set_xlabel("År")
    ax1.set_ylabel("Verdi (Mill. kr)")
    ax1.set_title("Simulerte baner")
    ax1.legend()
    ax1.grid(alpha=0.3)
 
    ax2.hist(sluttverdier, bins=50, color="steelblue", edgecolor="white")
    ax2.axvline(p50, color="black", label=f"Median: {p50:,.0f} kr")
    ax2.axvline(totalt_innskutt, color="red", linestyle="--", label="Totalt innskutt")
    ax2.set_xlabel("Sluttverdi (Mill. kr)")
    ax2.set_ylabel("Antall simuleringer")
    ax2.set_title(f"Fordeling av sluttverdi ({antall_sim} simuleringer)")
    ax2.legend()
    ax2.grid(alpha=0.3)
 
    plt.tight_layout()
    plt.show()
 
 
if __name__ == "__main__":
    main()
