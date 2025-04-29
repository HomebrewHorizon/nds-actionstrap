# ===========================
# 🎯 Toolchain Configuration
# ===========================
PREFIX = arm-none-eabi-
CC = $(PREFIX)gcc
CXX = $(PREFIX)g++
AS = $(PREFIX)as
LD = $(PREFIX)ld
OBJCOPY = $(PREFIX)objcopy
STRIP = $(PREFIX)strip

# ===========================
# 📂 Directories & Files
# ===========================
BUILD_DIR = build
SOURCE_DIR = src
TARGET = actionstrap.nds

# ===========================
# 📦 Libraries & Flags
# ===========================
LIBS = -lfat -lnds9
CFLAGS = -O2 -Wall -marm -march=armv5te -mtune=arm946e-s
CXXFLAGS = $(CFLAGS) -std=c++17
LDFLAGS = -Wl,-Map,$(BUILD_DIR)/mapfile.map

# ===========================
# 📜 Source Files
# ===========================
SOURCES = $(wildcard $(SOURCE_DIR)/*.cpp)
OBJECTS = $(patsubst $(SOURCE_DIR)/%.cpp, $(BUILD_DIR)/%.o, $(SOURCES))

# ===========================
# 🔨 Build Rules
# ===========================
all: $(TARGET)

$(TARGET): $(OBJECTS)
    $(CXX) $(LDFLAGS) -o $@ $(OBJECTS) $(LIBS)

$(BUILD_DIR)/%.o: $(SOURCE_DIR)/%.cpp
    @mkdir -p $(BUILD_DIR)
    $(CXX) $(CXXFLAGS) -c $< -o $@

# ===========================
# 🗑 Clean-Up
# ===========================
clean:
    rm -rf $(BUILD_DIR) $(TARGET)
