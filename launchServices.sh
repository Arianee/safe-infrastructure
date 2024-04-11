###########################################################################################
#                                                                                         #
#  BEFORE RUNNING THIS SCRIPT, MAKE SURE TO REPLACE THE SSH KEY WITH THE ONE IN DASHLANE  #
#                                                                                         #
###########################################################################################

# To connect to the VM: 
# gcloud compute ssh --zone "<VM_REGION>" "<VM_NAME>"  --project "<GCP_PROJECT_NAME" -- -L <LOCAL_PORT>:localhost:<REMOTE_PORT>
# e.g.
# gcloud compute ssh --zone "europe-west9-a" "gnosis-safe-instance-group-2p49"  --project "arianee-nodes" -- -L 8000:localhost:8000


# Inside the VM
sudo apt update
sudo apt upgrade -y
sudo apt install -y git

# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Add SSH key to be able to pull this repo
echo "-----BEGIN OPENSSH PRIVATE KEY-----
KEY IN DASHLANE
-----END OPENSSH PRIVATE KEY-----" > ~/.ssh/id_rsa

sudo chmod 600 ~/.ssh/id_rsa

cd /usr/local/
sudo git clone git@github.com:Arianee/safe-infrastructure.git

cd safe-infrastructure
sudo cp .env.sample .env
cd scripts
sudo sh run_locally.sh