###  Remove existing CuDA DRIVERS ###

# This will remove all that matches the names bellow #

sudo apt-get --purge remove "cublas*" "cuda*"
sudo apt-get --purge remove "nvidia*"
sudo rm -rf /usr/local/cuda*
sudo apt-get autoremove && sudo apt-get autoclean
sudo reboot
