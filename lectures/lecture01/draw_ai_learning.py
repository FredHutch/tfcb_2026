"""Draw the requested conceptual learning curves; these are not measured data.

Run from the repository root in ghcr.io/rasilab/r_python:2.4.2.
The xkcd style follows https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.xkcd.html.
"""

import os

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np

# Output, typography, and layout. Handwritten type is specific to these xkcd slides.
OUTPUT_DIR = "lectures/lecture01/img"
OUTPUT_NAMES = ("programming_without_ai", "programming_with_ai")
FORMATS = ("svg", "png", "pdf")
FIGSIZE = (4.5, 2.55)
DPI = 96
FONT = "Comic Sans MS"
FONT_SIZE = 7
BLACK = "#222222"
GRAY = "#999999"
BLUE = "#206a8a"
ORANGE = "#b75b17"
LINE_WIDTH = 1.0
AXIS_WIDTH = 0.7
SKETCH = (0.5, 70, 8)
MARGINS = {"left": 0.12, "right": 0.97, "bottom": 0.21, "top": 0.93}
XLIM = (0, 10.5)
YLIM = (0, 80)
X_LABEL = "Time spent learning to program"
Y_LABEL = "What you can do"
LABEL_PAD = 9
X_LABEL_PAD = 8
ARROW_STYLE = {"arrowstyle": "->", "lw": 0.6, "color": BLACK}
EARLY_LABEL = (2.0, 22)
LATE_LABEL = (6.7, 75)
EARLY_BOOST_LABEL = (0.55, 32)
LATE_BOOST_LABEL = (5.35, 42)
BOOST_TARGET_FRACTION = 0.6
LATE_BOOST_LABEL_OFFSET = 0.7
BASELINE_LABEL = (9.1, 36)
BASELINE_STYLE = (0, (3, 3))

# Geometric parameters for the user-requested schematic, not observations.
TIME_END = 10
SAMPLES = 300
STARTING_LEVEL = 2
GROWTH_RATE = 0.32
EARLY_START = 0.8
LATE_START = 6.0
AI_MULTIPLIER = 5
AI_LEARNING_RATE = 0.8

os.makedirs(OUTPUT_DIR, exist_ok=True)
plt.xkcd(scale=SKETCH[0], length=SKETCH[1], randomness=SKETCH[2])
plt.rcParams.update({
    "font.family": FONT,
    "font.size": FONT_SIZE,
    "axes.labelsize": FONT_SIZE,
    "text.color": BLACK,
    "axes.labelcolor": BLACK,
    "axes.edgecolor": BLACK,
    "axes.linewidth": AXIS_WIDTH,
    "lines.linewidth": LINE_WIDTH,
    "svg.fonttype": "path",
    "svg.hashsalt": "lecture01-ai-learning",
    "pdf.fonttype": 42,
    "path.effects": [],
})

time = np.linspace(0, TIME_END, SAMPLES)
skill = STARTING_LEVEL * np.exp(GROWTH_RATE * time)

for with_ai, name in enumerate(OUTPUT_NAMES):
    fig, ax = plt.subplots(figsize=FIGSIZE)
    fig.subplots_adjust(**MARGINS)
    ax.set(xlim=XLIM, ylim=YLIM, xticks=[], yticks=[])
    ax.spines[["top", "right"]].set_visible(False)
    ax.set_xlabel(X_LABEL, labelpad=X_LABEL_PAD)
    ax.set_ylabel(Y_LABEL, labelpad=LABEL_PAD)

    if not with_ai:
        ax.plot(time, skill, color=BLACK)
    else:
        ax.plot(time, skill, color=GRAY, linestyle=BASELINE_STYLE, zorder=1)
        for start, color in ((EARLY_START, ORANGE), (LATE_START, BLUE)):
            practice_time = np.linspace(0, start, SAMPLES)
            practice_skill = STARTING_LEVEL * np.exp(GROWTH_RATE * practice_time)
            before_ai = practice_skill[-1]
            after_ai = before_ai * AI_MULTIPLIER
            final_level = after_ai + AI_LEARNING_RATE * (TIME_END - start)
            ax.plot(practice_time, practice_skill, color=color, zorder=2)
            ax.plot([start, start, TIME_END], [before_ai, after_ai, final_level],
                    color=color, zorder=3)

        early_level = STARTING_LEVEL * np.exp(GROWTH_RATE * EARLY_START)
        ax.text(*EARLY_LABEL, "AI from the start", color=ORANGE)
        ax.text(*LATE_LABEL, "Learn first, then AI", color=BLUE)
        ax.text(*BASELINE_LABEL, "No AI", color=GRAY)
        ax.annotate(f"{AI_MULTIPLIER}× boost", xy=(EARLY_START, early_level *
                    AI_MULTIPLIER * BOOST_TARGET_FRACTION), xytext=EARLY_BOOST_LABEL,
                    arrowprops={**ARROW_STYLE, "color": ORANGE}, color=ORANGE)
        ax.text(*LATE_BOOST_LABEL, f"{AI_MULTIPLIER}×", ha="right", va="center", color=BLUE)
        ax.text(LATE_BOOST_LABEL[0] + LATE_BOOST_LABEL_OFFSET,
                LATE_BOOST_LABEL[1], "Same boost,\nhigher starting point", va="center", color=BLUE)

    for extension in FORMATS:
        filename = f"{OUTPUT_DIR}/{name}.{extension}"
        metadata = {"Date": None} if extension == "svg" else None
        fig.savefig(filename, dpi=DPI, facecolor="white", metadata=metadata)
        print(f"Wrote {filename}")
    plt.close(fig)
