#!/usr/bin/env bash
cd $HOME/BLACKBOTSS
while(true) do
rm -fr ../.telegram-cli
screen -S BLACKBOTSS -X kill
screen -S BLACKBOTSS ./BLACKBOTSS
done
