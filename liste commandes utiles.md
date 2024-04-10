# Creation instance template
gcloud beta compute instance-templates create gnosis-template --project=arianee-nodes --machine-type=e2-standard-2 --network-interface=network=default,no-address --instance-template-region=projects/arianee-nodes/regions/europe-west9 --maintenance-policy=MIGRATE --provisioning-model=STANDARD --service-account=373293519440-compute@developer.gserviceaccount.com --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --create-disk=auto-delete=yes,boot=yes,device-name=instance-template-20240410-205442,image=projects/debian-cloud/global/images/debian-12-bookworm-v20240312,mode=rw,size=20,type=pd-balanced --no-shielded-secure-boot --shielded-vtpm --shielded-integrity-monitoring --reservation-affinity=any

# Dans la VM
sudo -i
sudo apt-get update
sudo apt update
sudo apt upgrade

sudo apt install git

# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

echo "-----BEGIN OPENSSH PRIVATE KEY-----
KEY IN DASHLANE
YWwBAg==
-----END OPENSSH PRIVATE KEY-----" > ~/.ssh/id_rsa

chmod 600 ~/.ssh/id_rsa

cd /usr/local/
git clone git@github.com:Arianee/safe-infrastructure.git

cd safe-infrastructure
