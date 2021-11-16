import numpy as np
from IPython.display import Audio
import librosa
import cv2 as cv
from matplotlib import pyplot as plt

file_path = ".././samplesong/CanoninC.wav"
sample , sampling_rate = librosa.load( file_path , sr = None, mono = True, offset= 0.0, duration = None)

from librosa import display
import math
plt.figure()
librosa.display.waveplot(y = sample, sr = sampling_rate)

import scipy
from scipy.signal import find_peaks as FindPeak

def fft_plot(audio, sampling_rate, start_sec, stop_sec):
  start_frame = sampling_rate * start_sec
  stop_frame = sampling_rate * stop_sec
  n = int(stop_frame - start_frame)
  T = 1/sampling_rate
  y = scipy.fft(audio[int(start_frame) : int(stop_frame)])
  x = np.linspace(0.0, 1.0/(2.0*T), int(n/2))
  peaks, _ = FindPeak(2.0/n * np.abs(y[:n//2]), threshold = 0.08)
  return y, x, peaks

freq_wave = {}
for second in range(math.floor(10*len(sample)/ sampling_rate)):
  second = second/10
  y, x, peaks = fft_plot(sample, sampling_rate, second, second + 0.1)
  freq_wave[second] = []
  for i in range(len(peaks)):
    freq_wave[second].append(x[peaks[i]])


freq_note = [82.41,87.31,92.50,98.00,103.83,110.00,116.54,123.47,130.81,138.59,146.83,155.56,164.81,174.61,185.00,196.00,207.65,220.00,233.08,246.94,110.00,116.54,123.47,130.81,138.59,146.83,155.56,164.81,174.61,185.00,196.00,207.65,220.00,233.08,246.94,261.63,277.18,293.66,311.13,329.63,146.83,155.56,164.81,174.61,185.00,196.00,207.65,220.00,233.08,246.94,261.63,277.18,293.66,311.13,329.63,349.23,369.99,392.00,415.30,440.00,196.00,207.65,220.00,233.08,246.94,261.63,277.18,293.66,311.13,329.63,349.23,369.99,392.00,415.30,440.00,466.16,493.88,523.25,554.37,587.33,246.94,261.63,277.18,293.66,311.13,329.63,349.23,369.99,392.00,415.30,440.00,466.16,493.88,523.25,554.37,587.33,622.25,659.26,698.46,739.99,329.63,349.23,369.99,392.00,415.30,440.00,466.16,493.88,523.25,554.37,587.33,622.25,659.26,698.46,739.99,783.99,830.61,880.00,932.33 ,987.77]
def FindNote(fre):
  index = 19
  for i in range(len(freq_note)):
    if abs(freq_note[i]-fre) < abs(freq_note[index]-fre):
      index = i
    if abs(freq_note[i]-fre) == abs(freq_note[index]-fre) and i%20 < index%20:
      index = i
      #print(abs(fre - freq_note[index]))
  #print("====================")
  string_num = ['E','A','D','G','B','e']
  string_name = string_num[math.floor(index/20)]
  string_name += str(round(index%20))
  return string_name

#!------------ change freq_note to dict ------------!#
#!-------- or create preset frequency range --------!#
note_wave = {}

for second in range(math.floor(10*len(sample)/ sampling_rate)):
  second = second/10
  arr = freq_wave[second]
  note_array = []
  for j in range(len(arr)):
    count = 0
    for k in arr:
      if k != arr[j]:
        if k[0] == arr[j][0]:
          count+=1
    if count == 0:
      note_array.append(FindNote(arr[j]))
  note_wave[second] = note_array
print(note_wave)