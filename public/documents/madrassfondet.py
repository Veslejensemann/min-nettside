"""
MADRASSFONDET
Hvor stor må madrassen være for å gjemme hele oljefondet i kontanter?
 
Kjøres rett fra VS Code (Run-knappen) eller terminalen:  python madrassfondet.py
Bruker kun tkinter, som følger med Python — ingenting å installere.
 
Forutsetninger:
  - Amerikanske sedler: 15,6 cm lange, 6,6 cm brede, 0,0043 tommer tykke
  - Sedlene pakkes flatt uten luft, med kortsiden på tvers av madrassen
  - Fondsverdien legges inn i milliarder NOK og regnes om til USD via valutakursen
"""
 
import tkinter as tk
from tkinter import ttk
 
# ---------------------------------------------------------------- Konstanter
BILL_L = 15.6                # cm  (seddelens lengde)
BILL_W = 6.6                 # cm  (seddelens bredde)
BILL_T = 0.0043 * 2.54       # cm  (tykkelse: 0,010922 cm)
 
PAPER = "#F2EFE1"
INK   = "#14291C"
GREEN = "#1F5138"
SEAL  = "#2F7B54"
GOLD  = "#A8813C"
GRAY  = "#6B7268"
 
 
# ---------------------------------------------------------------- Formatering
def nf(x: float, des: int = 0) -> str:
    """Norsk tallformat: mellomrom som tusenskille, komma som desimaltegn."""
    s = f"{x:,.{des}f}"
    return s.replace(",", " ").replace(".", ",")
 
 
def fmt_lengde(cm: float):
    """Velger den mest lesbare enheten. Returnerer (hovedtekst, alternativ tekst)."""
    m, km, mil = cm / 100, cm / 100_000, cm / 1_000_000
    if mil >= 1:
        return f"{nf(mil, 1)} norske mil", f"= {nf(km)} km = {nf(m)} m"
    if km >= 1:
        return f"{nf(km, 2)} km", f"= {nf(m)} m"
    if m >= 1:
        return f"{nf(m, 2)} m", f"= {nf(cm)} cm"
    return f"{nf(cm, 1)} cm", ""
 
 
def sammenlign_lengde(km: float) -> str:
    for lengde, navn in [
        (40075, "rundt jorda ved ekvator"),
        (1700,  "Norge på langs (Lindesnes–Nordkapp i luftlinje)"),
        (460,   "Oslo–Bergen langs veien"),
        (0.5,   "Holmenkollbakken"),
    ]:
        if km >= lengde:
            return f"Det tilsvarer {nf(km / lengde, 1)} ganger {navn}."
    return "Det er faktisk en helt vanlig madrass. Sov godt."
 
 
def sammenlign_hoyde(m: float) -> str:
    for hoyde, navn in [
        (8849, "Mount Everest"),
        (2469, "Galdhøpiggen"),
        (330,  "Eiffeltårnet"),
        (117,  "Oslo Plaza"),
        (3,    "en vanlig etasjehøyde"),
    ]:
        if m >= hoyde:
            return f"Det er {nf(m / hoyde, 1)} ganger høyden av {navn}."
    return "Overraskende sivilisert. Nesten så det går an å ligge der."
 
 
# ---------------------------------------------------------------- Applikasjon
class Madrassfondet(tk.Tk):
 
    def __init__(self):
        super().__init__()
        self.title("Madrassfondet — hele oljefondet under madrassen")
        self.configure(bg=PAPER)
        self.minsize(760, 560)
 
        # --- State (StringVar, slik at alt oppdateres live mens man taster)
        self.fond_mrd_nok = tk.StringVar(value="12429")   # milliarder NOK (2022)
        self.kurs         = tk.StringVar(value="10.50")   # NOK per USD
        self.modus        = tk.StringVar(value="lengde")  # "lengde" | "hoyde"
        self.bredde       = tk.StringVar(value="200")     # cm
        self.hoyde        = tk.StringVar(value="22")      # cm
        self.lengde       = tk.StringVar(value="2")       # meter
        self.valor        = tk.StringVar(value="100")     # $-valør
 
        self._bygg_stiler()
        self._bygg_ui()
 
        for var in (self.fond_mrd_nok, self.kurs, self.modus,
                    self.bredde, self.hoyde, self.lengde, self.valor):
            var.trace_add("write", lambda *_: self.regn())
 
        self.regn()
        # Popup for fondsverdi vises ved oppstart, etter at hovedvinduet er tegnet
        self.after(150, self.apne_fond_popup)
 
    # ------------------------------------------------------------- Stiler
    def _bygg_stiler(self):
        stil = ttk.Style(self)
        try:
            stil.theme_use("clam")
        except tk.TclError:
            pass
        stil.configure("TFrame", background=PAPER)
        stil.configure("Panel.TFrame", background="white")
        stil.configure("TLabel", background=PAPER, foreground=INK,
                       font=("Segoe UI", 10))
        stil.configure("Panel.TLabel", background="white", foreground=INK,
                       font=("Segoe UI", 10))
        stil.configure("Felt.TLabel", background="white", foreground=INK,
                       font=("Segoe UI", 10, "bold"))
        stil.configure("Tittel.TLabel", background=PAPER, foreground=GREEN,
                       font=("Georgia", 26, "bold"))
        stil.configure("Under.TLabel", background=PAPER, foreground="#3C4A40",
                       font=("Segoe UI", 10))
        stil.configure("Resultat.TLabel", background="white", foreground=GREEN,
                       font=("Georgia", 30, "bold"))
        stil.configure("Alt.TLabel", background="white", foreground="#4A554C",
                       font=("Consolas", 11))
        stil.configure("Sml.TLabel", background="white", foreground=GOLD,
                       font=("Segoe UI", 10, "italic"))
        stil.configure("Grå.TLabel", background="white", foreground=GRAY,
                       font=("Segoe UI", 9))
        stil.configure("TRadiobutton", background="white", foreground=INK,
                       font=("Segoe UI", 10, "bold"))
        stil.configure("Fond.TButton", font=("Segoe UI", 10, "bold"))
 
    # ------------------------------------------------------------- Layout
    def _bygg_ui(self):
        ytre = ttk.Frame(self, padding=24)
        ytre.pack(fill="both", expand=True)
 
        ttk.Label(ytre, text="MADRASSFONDET", style="Tittel.TLabel").pack(anchor="w")
        ttk.Label(
            ytre,
            text="Hvor stor må madrassen være for å gjemme hele oljefondet i "
                 "amerikanske sedler? Velg om du vil finne lengden eller høyden.",
            style="Under.TLabel", wraplength=680, justify="left",
        ).pack(anchor="w", pady=(4, 16))
 
        innhold = ttk.Frame(ytre)
        innhold.pack(fill="both", expand=True)
        innhold.columnconfigure(1, weight=1)
 
        # ---------------- Venstre: kontrollpanel ----------------
        panel = ttk.Frame(innhold, style="Panel.TFrame", padding=18)
        panel.grid(row=0, column=0, sticky="nsw", padx=(0, 20))
 
        # Fondsverdi-chip
        chip = tk.Frame(panel, bg=GREEN, padx=14, pady=10)
        chip.pack(fill="x", pady=(0, 14))
        tk.Label(chip, text="FONDETS VERDI", bg=GREEN, fg="#BFD8C7",
                 font=("Segoe UI", 8, "bold")).pack(anchor="w")
        self.fond_visning = tk.Label(chip, text="", bg=GREEN, fg=PAPER,
                                     font=("Consolas", 13, "bold"))
        self.fond_visning.pack(anchor="w")
        tk.Button(chip, text="Endre …", command=self.apne_fond_popup,
                  bg=GREEN, fg=PAPER, activebackground="#194330",
                  activeforeground=PAPER, relief="ridge", bd=1,
                  font=("Segoe UI", 9)).pack(anchor="e", pady=(6, 0))
 
        # Modusvalg
        ttk.Label(panel, text="Hva vil du beregne?", style="Felt.TLabel").pack(anchor="w")
        for tekst, verdi in (("Finn lengden", "lengde"), ("Finn høyden", "hoyde")):
            ttk.Radiobutton(panel, text=tekst, value=verdi,
                            variable=self.modus,
                            command=self._oppdater_felter).pack(anchor="w", pady=2)
 
        # Inndatafelter — høyde/lengde bor i egen beholder så de kan byttes ut
        self._felt(panel, "Bredde (cm)", self.bredde)
        beholder = ttk.Frame(panel, style="Panel.TFrame")
        beholder.pack(anchor="w", fill="x")
        self.hoyde_felt  = self._felt(beholder, "Høyde (cm)", self.hoyde)
        self.lengde_felt = self._felt(beholder, "Lengde (meter)", self.lengde)
 
        ttk.Label(panel, text="Seddelvalør", style="Felt.TLabel").pack(anchor="w", pady=(10, 2))
        ttk.Combobox(panel, textvariable=self.valor, state="readonly", width=8,
                     values=["100", "50", "20", "10", "5", "1"]).pack(anchor="w")
 
        self._oppdater_felter()
 
        # ---------------- Høyre: resultater ----------------
        res = ttk.Frame(innhold, style="Panel.TFrame", padding=20)
        res.grid(row=0, column=1, sticky="nsew")
 
        self.res_etikett = ttk.Label(res, text="", style="Grå.TLabel")
        self.res_etikett.pack(anchor="w")
        self.res_hoved = ttk.Label(res, text="–", style="Resultat.TLabel")
        self.res_hoved.pack(anchor="w")
        self.res_alt = ttk.Label(res, text="", style="Alt.TLabel")
        self.res_alt.pack(anchor="w", pady=(2, 8))
        self.res_sml = ttk.Label(res, text="", style="Sml.TLabel", wraplength=430,
                                 justify="left")
        self.res_sml.pack(anchor="w", pady=(0, 12))
 
        ttk.Separator(res).pack(fill="x", pady=8)
 
        ttk.Label(res, text="SLIK REGNES DET UT", style="Grå.TLabel").pack(anchor="w")
        self.utregning = tk.Text(res, height=9, width=56, bd=0, bg="white",
                                 fg=INK, font=("Consolas", 10), wrap="none",
                                 state="disabled")
        self.utregning.pack(anchor="w", fill="both", expand=True, pady=(4, 0))
 
    def _felt(self, forelder, tekst, var):
        ramme = ttk.Frame(forelder, style="Panel.TFrame")
        ramme.pack(anchor="w", fill="x", pady=(10, 0))
        ttk.Label(ramme, text=tekst, style="Felt.TLabel").pack(anchor="w")
        ttk.Entry(ramme, textvariable=var, width=12,
                  font=("Consolas", 11)).pack(anchor="w", pady=(2, 0))
        return ramme
 
    def _oppdater_felter(self):
        self.hoyde_felt.pack_forget()
        self.lengde_felt.pack_forget()
        if self.modus.get() == "lengde":
            self.hoyde_felt.pack(anchor="w", fill="x", pady=(10, 0))
        else:
            self.lengde_felt.pack(anchor="w", fill="x", pady=(10, 0))
        self.regn()
 
    # ------------------------------------------------------------- Popup
    def apne_fond_popup(self):
        popup = tk.Toplevel(self)
        popup.title("Hvor stort er oljefondet?")
        popup.configure(bg=PAPER, padx=24, pady=20)
        popup.transient(self)
        popup.grab_set()
        popup.resizable(False, False)
 
        tk.Label(popup, text="Hvor stort er oljefondet?", bg=PAPER, fg=GREEN,
                 font=("Georgia", 16, "bold")).pack(anchor="w")
        tk.Label(popup,
                 text="Verdien endrer seg konstant — legg inn tallet du vil\n"
                      "regne med, i milliarder norske kroner.",
                 bg=PAPER, fg="#3C4A40", justify="left",
                 font=("Segoe UI", 10)).pack(anchor="w", pady=(4, 12))
 
        tk.Label(popup, text="Markedsverdi (milliarder NOK)", bg=PAPER, fg=INK,
                 font=("Segoe UI", 10, "bold")).pack(anchor="w")
        fond_inn = ttk.Entry(popup, font=("Consolas", 12), width=16)
        fond_inn.insert(0, self.fond_mrd_nok.get())
        fond_inn.pack(anchor="w", pady=(2, 6))
        fond_inn.select_range(0, "end")
        fond_inn.focus_set()
 
        # Hurtigvalg
        hurtig = tk.Frame(popup, bg=PAPER)
        hurtig.pack(anchor="w", pady=(0, 10))
        for tekst, verdi in (("12 429 (2022)", "12429"),
                             ("17 700 (2024)", "17700"),
                             ("20 000", "20000")):
            tk.Button(hurtig, text=tekst, font=("Consolas", 8),
                      bg="white", fg="#4A554C", relief="groove", bd=1,
                      command=lambda v=verdi: (fond_inn.delete(0, "end"),
                                               fond_inn.insert(0, v))
                      ).pack(side="left", padx=(0, 6))
 
        tk.Label(popup, text="Valutakurs (NOK per USD)", bg=PAPER, fg=INK,
                 font=("Segoe UI", 10, "bold")).pack(anchor="w")
        kurs_inn = ttk.Entry(popup, font=("Consolas", 12), width=16)
        kurs_inn.insert(0, self.kurs.get())
        kurs_inn.pack(anchor="w", pady=(2, 14))
 
        feil = tk.Label(popup, text="", bg=PAPER, fg="#A33", font=("Segoe UI", 9))
        feil.pack(anchor="w")
 
        def bruk(_=None):
            try:
                fond = float(fond_inn.get().replace(" ", "").replace(",", "."))
                kurs = float(kurs_inn.get().replace(" ", "").replace(",", "."))
                if fond <= 0 or kurs <= 0:
                    raise ValueError
            except ValueError:
                feil.config(text="Begge feltene må være positive tall.")
                return
            self.fond_mrd_nok.set(f"{fond:g}")
            self.kurs.set(f"{kurs:g}")
            popup.destroy()
 
        tk.Button(popup, text="Bruk verdiene", command=bruk,
                  bg=GREEN, fg=PAPER, activebackground="#194330",
                  activeforeground=PAPER, relief="flat",
                  font=("Segoe UI", 11, "bold"), padx=18, pady=6).pack(anchor="w")
        popup.bind("<Return>", bruk)
 
    # ------------------------------------------------------------- Regning
    def _tall(self, var):
        try:
            v = float(var.get().replace(" ", "").replace(",", "."))
            return v if v > 0 else None
        except ValueError:
            return None
 
    def regn(self, *_):
        if not hasattr(self, "res_etikett"):
            return  # UI-en er ikke ferdig bygget ennå
        fond_nok = self._tall(self.fond_mrd_nok)
        kurs     = self._tall(self.kurs)
        bredde   = self._tall(self.bredde)
        valor    = self._tall(self.valor)
 
        if None in (fond_nok, kurs, bredde, valor):
            self._vis_feil()
            return
 
        fond_usd     = fond_nok * 1e9 / kurs          # hele fondet i USD
        antall_sedler = fond_usd / valor
        i_bredden    = max(1, int(bredde // BILL_W))  # sedler side om side
 
        self.fond_visning.config(
            text=f"{nf(fond_nok)} mrd NOK  (≈ ${nf(fond_usd / 1e9)} mrd)")
 
        linjer = [
            f"Fondet          : {nf(fond_nok)} mrd NOK / {nf(kurs, 2)} kr = ${nf(fond_usd / 1e9, 1)} mrd",
            f"Antall sedler   : ${nf(fond_usd)} / ${valor:g} = {nf(antall_sedler)}",
            f"I bredden       : {nf(bredde)} cm / 6,6 cm = {i_bredden} sedler",
        ]
 
        if self.modus.get() == "lengde":
            hoyde = self._tall(self.hoyde)
            if hoyde is None:
                self._vis_feil()
                return
            i_hoyden    = max(1, int(hoyde // BILL_T))
            per_rad     = i_bredden * i_hoyden          # sedler per 15,6 cm
            rader       = antall_sedler / per_rad
            lengde_cm   = rader * BILL_L
            hoved, alt  = fmt_lengde(lengde_cm)
            sml         = sammenlign_lengde(lengde_cm / 100_000)
            etikett     = "MADRASSEN MÅ VÆRE SÅ LANG:"
            linjer += [
                f"I høyden        : {nf(hoyde)} cm / 0,010922 cm = {nf(i_hoyden)} sedler",
                f"Per 15,6 cm rad : {i_bredden} × {nf(i_hoyden)} = {nf(per_rad)} sedler (${nf(per_rad * valor)})",
                f"Antall rader    : {nf(antall_sedler)} / {nf(per_rad)} = {nf(rader, 1)}",
                f"Lengde          : {nf(rader, 1)} × 15,6 cm = {nf(lengde_cm)} cm",
            ]
        else:
            lengde_m = self._tall(self.lengde)
            if lengde_m is None:
                self._vis_feil()
                return
            rader      = max(1, int(lengde_m * 100 // BILL_L))
            per_lag    = i_bredden * rader
            lag        = antall_sedler / per_lag
            hoyde_cm   = lag * BILL_T
            hoved, alt = fmt_lengde(hoyde_cm)
            sml        = sammenlign_hoyde(hoyde_cm / 100)
            etikett    = "MADRASSEN MÅ VÆRE SÅ HØY:"
            linjer += [
                f"I lengden       : {nf(lengde_m * 100)} cm / 15,6 cm = {nf(rader)} rader",
                f"Per lag         : {i_bredden} × {nf(rader)} = {nf(per_lag)} sedler",
                f"Antall lag      : {nf(antall_sedler)} / {nf(per_lag)} = {nf(lag)}",
                f"Høyde           : {nf(lag)} × 0,010922 cm = {nf(hoyde_cm)} cm",
            ]
 
        vekt_tonn = antall_sedler / 1e6   # ca. 1 gram per seddel
        linjer.append(f"Vekt (1 g/stk)  : {nf(vekt_tonn)} tonn")
 
        self.res_etikett.config(text=etikett)
        self.res_hoved.config(text=hoved)
        self.res_alt.config(text=alt)
        self.res_sml.config(text=sml)
        self.utregning.config(state="normal")
        self.utregning.delete("1.0", "end")
        self.utregning.insert("1.0", "\n".join(linjer))
        self.utregning.config(state="disabled")
 
    def _vis_feil(self):
        self.res_etikett.config(text="")
        self.res_hoved.config(text="–")
        self.res_alt.config(text="Fyll inn gyldige, positive tall for å regne.")
        self.res_sml.config(text="")
 
 
if __name__ == "__main__":
    Madrassfondet().mainloop()
