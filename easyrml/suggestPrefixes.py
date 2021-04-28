'''
@auther: samiscoding@github
'''
import pandas as pd
import json

############################################################################

def readURLs(filePath):
	file_df = pd.read_csv(filePath, low_memory=False)
	return (list(file_df["URL"]))

def readPrefix(filePath):
	file_df = pd.read_csv(filePath, low_memory=False)
	return (list(file_df["prefix"]))

def handler():
    prefixURL = readURLs("/mnt/e/GitHub/easyRML/sources/defaultPrefixes.csv")


if __name__ == "__main__":
        handler()