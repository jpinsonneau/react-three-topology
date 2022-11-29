export const SmallCluster = {
  "allNamespaces": [
    "default",
    "network-observability",
    "openshift-apiserver",
    "openshift-apiserver-operator",
    "openshift-authentication",
    "openshift-authentication-operator",
    "openshift-cluster-storage-operator",
    "openshift-config-operator",
    "openshift-console",
    "openshift-console-operator",
    "openshift-controller-manager",
    "openshift-controller-manager-operator",
    "openshift-dns",
    "openshift-etcd-operator",
    "openshift-image-registry",
    "openshift-ingress",
    "openshift-insights",
    "openshift-kube-apiserver-operator",
    "openshift-kube-controller-manager-operator",
    "openshift-kube-scheduler-operator",
    "openshift-machine-config-operator",
    "openshift-marketplace",
    "openshift-monitoring",
    "openshift-oauth-apiserver",
    "openshift-operator-lifecycle-manager"
  ],
  "externals": [
    {
      "name": "10.0.139.106",
      "children": []
    },
    {
      "name": "10.0.146.103",
      "children": []
    },
    {
      "name": "10.0.166.106",
      "children": []
    },
    {
      "name": "10.0.178.87",
      "children": []
    },
    {
      "name": "10.0.195.255",
      "children": []
    },
    {
      "name": "10.0.20.35",
      "children": []
    },
    {
      "name": "10.0.36.247",
      "children": []
    },
    {
      "name": "10.0.63.174",
      "children": []
    },
    {
      "name": "10.0.66.97",
      "children": []
    },
    {
      "name": "10.0.9.68",
      "children": []
    },
    {
      "name": "169.254.169.254",
      "children": []
    },
    {
      "name": "173.222.169.13",
      "children": []
    },
    {
      "name": "23.62.164.251",
      "children": []
    },
    {
      "name": "10.0.19.255",
      "children": []
    },
    {
      "name": "10.128.0.2",
      "children": []
    },
    {
      "name": "10.129.0.2",
      "children": []
    },
    {
      "name": "10.130.0.2",
      "children": []
    },
    {
      "name": "10.131.0.2",
      "children": []
    }
  ],
  "services": [
    {
      "name": "kubernetes",
      "namespace": "default",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    },
    {
      "name": "loki",
      "namespace": "network-observability",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    }
  ],
  "nodes": [
    {
      "name": "ip-10-0-134-129.ec2.internal",
      "type": "Node",
      "children": [
        {
          "name": "openshift-apiserver-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "openshift-apiserver-operator",
              "namespace": "openshift-apiserver-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "openshift-apiserver-operator-5b68b48c76-xc44h",
                  "namespace": "openshift-apiserver-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-kube-apiserver-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "kube-apiserver-operator",
              "namespace": "openshift-kube-apiserver-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "kube-apiserver-operator-6b7986f9f6-lkvk7",
                  "namespace": "openshift-kube-apiserver-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-authentication-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "authentication-operator",
              "namespace": "openshift-authentication-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "authentication-operator-75cc9ff755-tjl76",
                  "namespace": "openshift-authentication-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-kube-controller-manager-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "kube-controller-manager-operator",
              "namespace": "openshift-kube-controller-manager-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "kube-controller-manager-operator-5b99464d8d-fbpdb",
                  "namespace": "openshift-kube-controller-manager-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-machine-config-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "machine-config-operator",
              "namespace": "openshift-machine-config-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "machine-config-operator-676f44457d-czrw2",
                  "namespace": "openshift-machine-config-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "machine-config-controller",
              "namespace": "openshift-machine-config-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "machine-config-controller-7f8c5d7d77-jgcp8",
                  "namespace": "openshift-machine-config-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "cluster-monitoring-operator",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "cluster-monitoring-operator-dbcdff999-mn4jr",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-oauth-apiserver",
          "type": "Namespace",
          "children": [
            {
              "name": "apiserver",
              "namespace": "openshift-oauth-apiserver",
              "type": "Deployment",
              "children": [
                {
                  "name": "apiserver-7fb75cbc7b-956qc",
                  "namespace": "openshift-oauth-apiserver",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-apiserver",
          "type": "Namespace",
          "children": [
            {
              "name": "apiserver",
              "namespace": "openshift-apiserver",
              "type": "Deployment",
              "children": [
                {
                  "name": "apiserver-7df6fdd99d-g7gv9",
                  "namespace": "openshift-apiserver",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-etcd-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "etcd-operator",
              "namespace": "openshift-etcd-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "etcd-operator-96579df87-zc8mm",
                  "namespace": "openshift-etcd-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "network-observability",
          "type": "Namespace",
          "children": [
            {
              "name": "flowlogs-pipeline",
              "namespace": "network-observability",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "flowlogs-pipeline-rkg2v",
                  "namespace": "network-observability",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-authentication",
          "type": "Namespace",
          "children": [
            {
              "name": "oauth-openshift",
              "namespace": "openshift-authentication",
              "type": "Deployment",
              "children": [
                {
                  "name": "oauth-openshift-86c67766bc-q595v",
                  "namespace": "openshift-authentication",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-config-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "openshift-config-operator",
              "namespace": "openshift-config-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "openshift-config-operator-6768bbb74f-hz6pn",
                  "namespace": "openshift-config-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-console",
          "type": "Namespace",
          "children": [
            {
              "name": "console",
              "namespace": "openshift-console",
              "type": "Deployment",
              "children": [
                {
                  "name": "console-7bfc48556b-svw8w",
                  "namespace": "openshift-console",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                },
                {
                  "name": "console-7bfc48556b-jzfgc",
                  "namespace": "openshift-console",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-operator-lifecycle-manager",
          "type": "Namespace",
          "children": [
            {
              "name": "olm-operator",
              "namespace": "openshift-operator-lifecycle-manager",
              "type": "Deployment",
              "children": [
                {
                  "name": "olm-operator-55d596d44-ggdj7",
                  "namespace": "openshift-operator-lifecycle-manager",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "catalog-operator",
              "namespace": "openshift-operator-lifecycle-manager",
              "type": "Deployment",
              "children": [
                {
                  "name": "catalog-operator-9d66488bd-b7nhq",
                  "namespace": "openshift-operator-lifecycle-manager",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "packageserver",
              "namespace": "openshift-operator-lifecycle-manager",
              "type": "Deployment",
              "children": [
                {
                  "name": "packageserver-68f8544495-w66xw",
                  "namespace": "openshift-operator-lifecycle-manager",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-console-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "console-operator",
              "namespace": "openshift-console-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "console-operator-7d4fdb4cb-jcfg2",
                  "namespace": "openshift-console-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-marketplace",
          "type": "Namespace",
          "children": [
            {
              "name": "community-operators",
              "namespace": "openshift-marketplace",
              "type": "CatalogSource",
              "children": [
                {
                  "name": "community-operators-9jt8d",
                  "namespace": "openshift-marketplace",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "redhat-operators",
              "namespace": "openshift-marketplace",
              "type": "CatalogSource",
              "children": [
                {
                  "name": "redhat-operators-27msk",
                  "namespace": "openshift-marketplace",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                },
                {
                  "name": "redhat-operators-5n5lm",
                  "namespace": "openshift-marketplace",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "certified-operators",
              "namespace": "openshift-marketplace",
              "type": "CatalogSource",
              "children": [
                {
                  "name": "certified-operators-48f6q",
                  "namespace": "openshift-marketplace",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "redhat-marketplace",
              "namespace": "openshift-marketplace",
              "type": "CatalogSource",
              "children": [
                {
                  "name": "redhat-marketplace-cms4w",
                  "namespace": "openshift-marketplace",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-dns",
          "type": "Namespace",
          "children": [
            {
              "name": "dns-default",
              "namespace": "openshift-dns",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "dns-default-l9kf6",
                  "namespace": "openshift-dns",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-controller-manager",
          "type": "Namespace",
          "children": [
            {
              "name": "controller-manager",
              "namespace": "openshift-controller-manager",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "controller-manager-p4l8j",
                  "namespace": "openshift-controller-manager",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-cluster-storage-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "cluster-storage-operator",
              "namespace": "openshift-cluster-storage-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "cluster-storage-operator-b5d989cb5-64szd",
                  "namespace": "openshift-cluster-storage-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-insights",
          "type": "Namespace",
          "children": [
            {
              "name": "insights-operator",
              "namespace": "openshift-insights",
              "type": "Deployment",
              "children": [
                {
                  "name": "insights-operator-589f9d777b-z5xtq",
                  "namespace": "openshift-insights",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-controller-manager-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "openshift-controller-manager-operator",
              "namespace": "openshift-controller-manager-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "openshift-controller-manager-operator-56d96cc8dc-nhdc6",
                  "namespace": "openshift-controller-manager-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-kube-scheduler-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "openshift-kube-scheduler-operator",
              "namespace": "openshift-kube-scheduler-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "openshift-kube-scheduler-operator-6f786d86db-dshmj",
                  "namespace": "openshift-kube-scheduler-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        }
      ],
      "color": "#8476D1"
    },
    {
      "name": "ip-10-0-160-59.ec2.internal",
      "type": "Node",
      "children": [
        {
          "name": "openshift-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "prometheus-k8s",
              "namespace": "openshift-monitoring",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "prometheus-k8s-0",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "kube-state-metrics",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "kube-state-metrics-6977cbc464-m9h8l",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "network-observability",
          "type": "Namespace",
          "children": [
            {
              "name": "flowlogs-pipeline",
              "namespace": "network-observability",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "flowlogs-pipeline-x4c7z",
                  "namespace": "network-observability",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-ingress",
          "type": "Namespace",
          "children": [
            {
              "name": "router-default",
              "namespace": "openshift-ingress",
              "type": "Deployment",
              "children": [
                {
                  "name": "router-default-74f946c6f9-2b5p9",
                  "namespace": "openshift-ingress",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-image-registry",
          "type": "Namespace",
          "children": [
            {
              "name": "image-registry",
              "namespace": "openshift-image-registry",
              "type": "Deployment",
              "children": [
                {
                  "name": "image-registry-7d64f9f964-4tw9r",
                  "namespace": "openshift-image-registry",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        }
      ],
      "color": "#8476D1"
    },
    {
      "name": "ip-10-0-142-24.ec2.internal",
      "type": "Node",
      "children": [
        {
          "name": "openshift-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "prometheus-k8s",
              "namespace": "openshift-monitoring",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "prometheus-k8s-1",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "alertmanager-main",
              "namespace": "openshift-monitoring",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "alertmanager-main-0",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "grafana",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "grafana-799b44665c-m4nmr",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "thanos-querier",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "thanos-querier-75d9446654-7tbdm",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "network-observability",
          "type": "Namespace",
          "children": [
            {
              "name": "flowlogs-pipeline",
              "namespace": "network-observability",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "flowlogs-pipeline-tskw2",
                  "namespace": "network-observability",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        }
      ],
      "color": "#8476D1"
    },
    {
      "name": "ip-10-0-152-51.ec2.internal",
      "type": "Node",
      "children": [
        {
          "name": "openshift-ingress",
          "type": "Namespace",
          "children": [
            {
              "name": "router-default",
              "namespace": "openshift-ingress",
              "type": "Deployment",
              "children": [
                {
                  "name": "router-default-74f946c6f9-5w8dl",
                  "namespace": "openshift-ingress",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "network-observability",
          "type": "Namespace",
          "children": [
            {
              "name": "loki",
              "namespace": "network-observability",
              "type": "Pod",
              "children": [
                {
                  "name": "loki",
                  "namespace": "network-observability",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#009596"
            },
            {
              "name": "netobserv-controller-manager",
              "namespace": "network-observability",
              "type": "Deployment",
              "children": [
                {
                  "name": "netobserv-controller-manager-cc89b5cdf-cpd6q",
                  "namespace": "network-observability",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "flowlogs-pipeline",
              "namespace": "network-observability",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "flowlogs-pipeline-dkr96",
                  "namespace": "network-observability",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "thanos-querier",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "thanos-querier-75d9446654-r9xlq",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-image-registry",
          "type": "Namespace",
          "children": [
            {
              "name": "image-registry",
              "namespace": "openshift-image-registry",
              "type": "Deployment",
              "children": [
                {
                  "name": "image-registry-7d64f9f964-pdjdb",
                  "namespace": "openshift-image-registry",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        }
      ],
      "color": "#8476D1"
    }
  ],
  "edges": [
    {
      "from": {
        "name": "router-default-74f946c6f9-5w8dl",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.0.19.255",
        "children": [],
      },
      "size": 311523
    },
    {
      "from": {
        "name": "loki",
        "namespace": "network-observability",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "flowlogs-pipeline-rkg2v",
        "namespace": "network-observability",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 846478577
    },
    {
      "from": {
        "name": "oauth-openshift-86c67766bc-q595v",
        "namespace": "openshift-authentication",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.128.0.2",
        "children": [],
      },
      "size": 29441712
    },
    {
      "from": {
        "name": "openshift-config-operator-6768bbb74f-hz6pn",
        "namespace": "openshift-config-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.128.0.2",
        "children": [],
      },
      "size": 95443370
    },
    {
      "from": {
        "name": "console-7bfc48556b-svw8w",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.128.0.2",
        "children": [],
      },
      "size": 23650362
    },
    {
      "from": {
        "name": "console-7bfc48556b-jzfgc",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.128.0.2",
        "children": [],
      },
      "size": 23640738
    },
    {
      "from": {
        "name": "olm-operator-55d596d44-ggdj7",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.128.0.2",
        "children": [],
      },
      "size": 22893734
    },
    {
      "from": {
        "name": "catalog-operator-9d66488bd-b7nhq",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.128.0.2",
        "children": [],
      },
      "size": 22570130
    },
    {
      "from": {
        "name": "packageserver-68f8544495-w66xw",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.128.0.2",
        "children": [],
      },
      "size": 25237236
    },
    {
      "from": {
        "name": "apiserver-7fb75cbc7b-956qc",
        "namespace": "openshift-oauth-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.128.0.2",
        "children": [],
      },
      "size": 108919464
    },
    {
      "from": {
        "name": "apiserver-7df6fdd99d-g7gv9",
        "namespace": "openshift-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.128.0.2",
        "children": [],
      },
      "size": 324868348
    },
    {
      "from": {
        "name": "console-operator-7d4fdb4cb-jcfg2",
        "namespace": "openshift-console-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.128.0.2",
        "children": [],
      },
      "size": 28652480
    },
    {
      "from": {
        "name": "community-operators-9jt8d",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-68f8544495-w66xw",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 765784329
    },
    {
      "from": {
        "name": "redhat-operators-27msk",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-68f8544495-w66xw",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 446364849
    },
    {
      "from": {
        "name": "certified-operators-48f6q",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-68f8544495-w66xw",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 353543024
    },
    {
      "from": {
        "name": "redhat-operators-5n5lm",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-68f8544495-w66xw",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 141612316
    },
    {
      "from": {
        "name": "redhat-marketplace-cms4w",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-68f8544495-w66xw",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 191641629
    },
    {
      "from": {
        "name": "dns-default-l9kf6",
        "namespace": "openshift-dns",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "controller-manager-p4l8j",
        "namespace": "openshift-controller-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 2681076
    },
    {
      "from": {
        "name": "oauth-openshift-86c67766bc-q595v",
        "namespace": "openshift-authentication",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-74f946c6f9-5w8dl",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 10228480
    },
    {
      "from": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-74f946c6f9-5w8dl",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 16066181
    },
    {
      "from": {
        "name": "alertmanager-main-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-74f946c6f9-5w8dl",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 2322314
    },
    {
      "from": {
        "name": "grafana-799b44665c-m4nmr",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-74f946c6f9-5w8dl",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 2311280
    },
    {
      "from": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-74f946c6f9-5w8dl",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 15714945
    },
    {
      "from": {
        "name": "flowlogs-pipeline-x4c7z",
        "namespace": "network-observability",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "loki",
        "namespace": "network-observability",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 420210413
    },
    {
      "from": {
        "name": "flowlogs-pipeline-tskw2",
        "namespace": "network-observability",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "loki",
        "namespace": "network-observability",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 390923658
    },
    {
      "from": {
        "name": "thanos-querier-75d9446654-r9xlq",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.129.0.2",
        "children": [],
      },
      "size": 27229206
    },
    {
      "from": {
        "name": "image-registry-7d64f9f964-pdjdb",
        "namespace": "openshift-image-registry",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.129.0.2",
        "children": [],
      },
      "size": 19588732
    },
    {
      "from": {
        "name": "openshift-apiserver-operator-5b68b48c76-xc44h",
        "namespace": "openshift-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 37116782
    },
    {
      "from": {
        "name": "kube-apiserver-operator-6b7986f9f6-lkvk7",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 44626407
    },
    {
      "from": {
        "name": "authentication-operator-75cc9ff755-tjl76",
        "namespace": "openshift-authentication-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 47253118
    },
    {
      "from": {
        "name": "cluster-storage-operator-b5d989cb5-64szd",
        "namespace": "openshift-cluster-storage-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 39188914
    },
    {
      "from": {
        "name": "kube-controller-manager-operator-5b99464d8d-fbpdb",
        "namespace": "openshift-kube-controller-manager-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 30866788
    },
    {
      "from": {
        "name": "insights-operator-589f9d777b-z5xtq",
        "namespace": "openshift-insights",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 37076458
    },
    {
      "from": {
        "name": "openshift-controller-manager-operator-56d96cc8dc-nhdc6",
        "namespace": "openshift-controller-manager-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 24753348
    },
    {
      "from": {
        "name": "openshift-kube-scheduler-operator-6f786d86db-dshmj",
        "namespace": "openshift-kube-scheduler-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 28456364
    },
    {
      "from": {
        "name": "apiserver-7df6fdd99d-g7gv9",
        "namespace": "openshift-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 54738148
    },
    {
      "from": {
        "name": "etcd-operator-96579df87-zc8mm",
        "namespace": "openshift-etcd-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 29717072
    },
    {
      "from": {
        "name": "console-operator-7d4fdb4cb-jcfg2",
        "namespace": "openshift-console-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 28621794
    },
    {
      "from": {
        "name": "kube-state-metrics-6977cbc464-m9h8l",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 614498249
    },
    {
      "from": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 81532997
    },
    {
      "from": {
        "name": "oauth-openshift-86c67766bc-q595v",
        "namespace": "openshift-authentication",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-74f946c6f9-2b5p9",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 2327308
    },
    {
      "from": {
        "name": "grafana-799b44665c-m4nmr",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-74f946c6f9-2b5p9",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3321600
    },
    {
      "from": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-74f946c6f9-2b5p9",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 14961715
    },
    {
      "from": {
        "name": "image-registry-7d64f9f964-4tw9r",
        "namespace": "openshift-image-registry",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.130.0.2",
        "children": [],
      },
      "size": 19566668
    },
    {
      "from": {
        "name": "openshift-apiserver-operator-5b68b48c76-xc44h",
        "namespace": "openshift-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 37775096
    },
    {
      "from": {
        "name": "kube-apiserver-operator-6b7986f9f6-lkvk7",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 44510838
    },
    {
      "from": {
        "name": "authentication-operator-75cc9ff755-tjl76",
        "namespace": "openshift-authentication-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 47257564
    },
    {
      "from": {
        "name": "cluster-storage-operator-b5d989cb5-64szd",
        "namespace": "openshift-cluster-storage-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 39203198
    },
    {
      "from": {
        "name": "kube-controller-manager-operator-5b99464d8d-fbpdb",
        "namespace": "openshift-kube-controller-manager-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 30937580
    },
    {
      "from": {
        "name": "insights-operator-589f9d777b-z5xtq",
        "namespace": "openshift-insights",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 37049018
    },
    {
      "from": {
        "name": "openshift-controller-manager-operator-56d96cc8dc-nhdc6",
        "namespace": "openshift-controller-manager-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 24747042
    },
    {
      "from": {
        "name": "openshift-kube-scheduler-operator-6f786d86db-dshmj",
        "namespace": "openshift-kube-scheduler-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 28503422
    },
    {
      "from": {
        "name": "apiserver-7df6fdd99d-g7gv9",
        "namespace": "openshift-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 54614986
    },
    {
      "from": {
        "name": "etcd-operator-96579df87-zc8mm",
        "namespace": "openshift-etcd-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 29694230
    },
    {
      "from": {
        "name": "console-operator-7d4fdb4cb-jcfg2",
        "namespace": "openshift-console-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 28763120
    },
    {
      "from": {
        "name": "kube-state-metrics-6977cbc464-m9h8l",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 1223142038
    },
    {
      "from": {
        "name": "thanos-querier-75d9446654-7tbdm",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.131.0.2",
        "children": [],
      },
      "size": 27240814
    },
    {
      "from": {
        "name": "openshift-apiserver-operator-5b68b48c76-xc44h",
        "namespace": "openshift-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 26692525
    },
    {
      "from": {
        "name": "kube-apiserver-operator-6b7986f9f6-lkvk7",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 12569414
    },
    {
      "from": {
        "name": "olm-operator-55d596d44-ggdj7",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 415580
    },
    {
      "from": {
        "name": "authentication-operator-75cc9ff755-tjl76",
        "namespace": "openshift-authentication-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 2743835
    },
    {
      "from": {
        "name": "kube-controller-manager-operator-5b99464d8d-fbpdb",
        "namespace": "openshift-kube-controller-manager-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 25751676
    },
    {
      "from": {
        "name": "machine-config-operator-676f44457d-czrw2",
        "namespace": "openshift-machine-config-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 38408971
    },
    {
      "from": {
        "name": "cluster-monitoring-operator-dbcdff999-mn4jr",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 313545144
    },
    {
      "from": {
        "name": "machine-config-controller-7f8c5d7d77-jgcp8",
        "namespace": "openshift-machine-config-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 3984961
    },
    {
      "from": {
        "name": "apiserver-7df6fdd99d-g7gv9",
        "namespace": "openshift-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 44146854
    },
    {
      "from": {
        "name": "netobserv-controller-manager-cc89b5cdf-cpd6q",
        "namespace": "network-observability",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 27609861
    },
    {
      "from": {
        "name": "flowlogs-pipeline-dkr96",
        "namespace": "network-observability",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "loki",
        "namespace": "network-observability",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 153596093
    },
    {
      "from": {
        "name": "controller-manager-p4l8j",
        "namespace": "openshift-controller-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "173.222.169.13",
        "children": [],
      },
      "size": 3552637
    }
  ],
  "options": {
    "edges": true,
    "resourceHTML": true,
  }
};

export const BiggerOne = {
  "allNamespaces": [
    "default",
    "netobserv",
    "openshift-apiserver",
    "openshift-apiserver-operator",
    "openshift-authentication",
    "openshift-authentication-operator",
    "openshift-cloud-credential-operator",
    "openshift-cluster-storage-operator",
    "openshift-config-operator",
    "openshift-console",
    "openshift-console-operator",
    "openshift-controller-manager",
    "openshift-controller-manager-operator",
    "openshift-dns",
    "openshift-etcd-operator",
    "openshift-image-registry",
    "openshift-ingress",
    "openshift-insights",
    "openshift-kube-apiserver-operator",
    "openshift-kube-controller-manager-operator",
    "openshift-kube-scheduler",
    "openshift-kube-scheduler-operator",
    "openshift-machine-api",
    "openshift-machine-config-operator",
    "openshift-marketplace",
    "openshift-monitoring",
    "openshift-network-diagnostics",
    "openshift-oauth-apiserver",
    "openshift-operator-lifecycle-manager",
    "openshift-service-ca",
    "openshift-service-ca-operator",
    "openshift-user-workload-monitoring"
  ],
  "externals": [
    {
      "name": "10.0.13.122",
      "children": []
    },
    {
      "name": "10.0.143.30",
      "children": []
    },
    {
      "name": "10.0.189.142",
      "children": []
    },
    {
      "name": "10.0.200.53",
      "children": []
    },
    {
      "name": "169.254.169.254",
      "children": []
    },
    {
      "name": "3.140.83.190",
      "children": []
    },
    {
      "name": "3.5.129.159",
      "children": []
    },
    {
      "name": "52.219.104.120",
      "children": []
    },
    {
      "name": "52.219.105.242",
      "children": []
    },
    {
      "name": "52.219.98.161",
      "children": []
    },
    {
      "name": "52.95.20.2",
      "children": []
    },
    {
      "name": "52.219.92.153",
      "children": []
    },
    {
      "name": "10.0.35.219",
      "children": []
    },
    {
      "name": "100.64.0.2",
      "children": []
    },
    {
      "name": "100.64.0.3",
      "children": []
    },
    {
      "name": "100.64.0.4",
      "children": []
    },
    {
      "name": "100.64.0.5",
      "children": []
    },
    {
      "name": "100.64.0.6",
      "children": []
    },
    {
      "name": "100.64.0.7",
      "children": []
    },
    {
      "name": "52.219.102.161",
      "children": []
    },
    {
      "name": "52.219.106.233",
      "children": []
    }
  ],
  "services": [
    {
      "name": "kubernetes",
      "namespace": "default",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    },
    {
      "name": "kafka-cluster-kafka-bootstrap",
      "namespace": "netobserv",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    },
    {
      "name": "dns-default",
      "namespace": "openshift-dns",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    },
    {
      "name": "community-operators",
      "namespace": "openshift-marketplace",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    },
    {
      "name": "redhat-operators",
      "namespace": "openshift-marketplace",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    },
    {
      "name": "lokistack-compactor-http",
      "namespace": "netobserv",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    },
    {
      "name": "lokistack-distributor-http",
      "namespace": "netobserv",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    },
    {
      "name": "ui",
      "namespace": "default",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    },
    {
      "name": "ball",
      "namespace": "default",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    },
    {
      "name": "lokistack-gateway-http",
      "namespace": "netobserv",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    },
    {
      "name": "thanos-querier",
      "namespace": "openshift-monitoring",
      "type": "Service",
      "children": [],
      "color": "#3E8635"
    }
  ],
  "nodes": [
    {
      "name": "ip-10-0-146-32.us-east-2.compute.internal",
      "type": "Node",
      "children": [
        {
          "name": "openshift-ingress",
          "type": "Namespace",
          "children": [
            {
              "name": "router-default",
              "namespace": "openshift-ingress",
              "type": "Deployment",
              "children": [
                {
                  "name": "router-default-7d7cb7b9cb-xplkx",
                  "namespace": "openshift-ingress",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "prometheus-k8s",
              "namespace": "openshift-monitoring",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "prometheus-k8s-0",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "thanos-querier",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "thanos-querier-547cf74fc9-zq2j4",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "telemeter-client",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "telemeter-client-6c8549b599-fjq5k",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "alertmanager-main",
              "namespace": "openshift-monitoring",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "alertmanager-main-1",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-dns",
          "type": "Namespace",
          "children": [
            {
              "name": "dns-default",
              "namespace": "openshift-dns",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "dns-default-kkj9j",
                  "namespace": "openshift-dns",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-image-registry",
          "type": "Namespace",
          "children": [
            {
              "name": "image-registry",
              "namespace": "openshift-image-registry",
              "type": "Deployment",
              "children": [
                {
                  "name": "image-registry-69f8c8547c-cjbgx",
                  "namespace": "openshift-image-registry",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "netobserv",
          "type": "Namespace",
          "children": [
            {
              "name": "lokistack-ingester",
              "namespace": "netobserv",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "lokistack-ingester-0",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "lokistack-compactor",
              "namespace": "netobserv",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "lokistack-compactor-0",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "flowlogs-pipeline-transformer",
              "namespace": "netobserv",
              "type": "Deployment",
              "children": [
                {
                  "name": "flowlogs-pipeline-transformer-7499cd9469-lgwvk",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        }
      ],
      "color": "#8476D1"
    },
    {
      "name": "ip-10-0-131-74.us-east-2.compute.internal",
      "type": "Node",
      "children": [
        {
          "name": "openshift-etcd-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "etcd-operator",
              "namespace": "openshift-etcd-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "etcd-operator-78974f57b9-hdzg7",
                  "namespace": "openshift-etcd-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-operator-lifecycle-manager",
          "type": "Namespace",
          "children": [
            {
              "name": "packageserver",
              "namespace": "openshift-operator-lifecycle-manager",
              "type": "Deployment",
              "children": [
                {
                  "name": "packageserver-6cfdb4548c-4z97s",
                  "namespace": "openshift-operator-lifecycle-manager",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "catalog-operator",
              "namespace": "openshift-operator-lifecycle-manager",
              "type": "Deployment",
              "children": [
                {
                  "name": "catalog-operator-5655866444-q82qc",
                  "namespace": "openshift-operator-lifecycle-manager",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "olm-operator",
              "namespace": "openshift-operator-lifecycle-manager",
              "type": "Deployment",
              "children": [
                {
                  "name": "olm-operator-86cd44d7b4-m4666",
                  "namespace": "openshift-operator-lifecycle-manager",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-apiserver",
          "type": "Namespace",
          "children": [
            {
              "name": "apiserver",
              "namespace": "openshift-apiserver",
              "type": "Deployment",
              "children": [
                {
                  "name": "apiserver-7764cf65b-r5lqg",
                  "namespace": "openshift-apiserver",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-kube-apiserver-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "kube-apiserver-operator",
              "namespace": "openshift-kube-apiserver-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "kube-apiserver-operator-789b8c8bf6-s7pk2",
                  "namespace": "openshift-kube-apiserver-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-controller-manager",
          "type": "Namespace",
          "children": [
            {
              "name": "controller-manager",
              "namespace": "openshift-controller-manager",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "controller-manager-q4nmg",
                  "namespace": "openshift-controller-manager",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-cluster-storage-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "cluster-storage-operator",
              "namespace": "openshift-cluster-storage-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "cluster-storage-operator-6f6b9c8df6-bb8mc",
                  "namespace": "openshift-cluster-storage-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-kube-scheduler-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "openshift-kube-scheduler-operator",
              "namespace": "openshift-kube-scheduler-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "openshift-kube-scheduler-operator-7c65bc5d9b-mc294",
                  "namespace": "openshift-kube-scheduler-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-insights",
          "type": "Namespace",
          "children": [
            {
              "name": "insights-operator",
              "namespace": "openshift-insights",
              "type": "Deployment",
              "children": [
                {
                  "name": "insights-operator-7d78496b84-gjhtj",
                  "namespace": "openshift-insights",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-service-ca-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "service-ca-operator",
              "namespace": "openshift-service-ca-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "service-ca-operator-6bf9d9448c-zlm6p",
                  "namespace": "openshift-service-ca-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-apiserver-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "openshift-apiserver-operator",
              "namespace": "openshift-apiserver-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "openshift-apiserver-operator-6c9fc6469c-vl982",
                  "namespace": "openshift-apiserver-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-authentication-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "authentication-operator",
              "namespace": "openshift-authentication-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "authentication-operator-dbd5bd768-tgc78",
                  "namespace": "openshift-authentication-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-config-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "openshift-config-operator",
              "namespace": "openshift-config-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "openshift-config-operator-674f98f947-bgtjr",
                  "namespace": "openshift-config-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-cloud-credential-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "cloud-credential-operator",
              "namespace": "openshift-cloud-credential-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "cloud-credential-operator-584455c8f5-gxbxg",
                  "namespace": "openshift-cloud-credential-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-kube-controller-manager-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "kube-controller-manager-operator",
              "namespace": "openshift-kube-controller-manager-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "kube-controller-manager-operator-66bc7cfd-nswkl",
                  "namespace": "openshift-kube-controller-manager-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-authentication",
          "type": "Namespace",
          "children": [
            {
              "name": "oauth-openshift",
              "namespace": "openshift-authentication",
              "type": "Deployment",
              "children": [
                {
                  "name": "oauth-openshift-5f8c588df6-plx5r",
                  "namespace": "openshift-authentication",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-dns",
          "type": "Namespace",
          "children": [
            {
              "name": "dns-default",
              "namespace": "openshift-dns",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "dns-default-dwp7n",
                  "namespace": "openshift-dns",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-machine-api",
          "type": "Namespace",
          "children": [
            {
              "name": "cluster-autoscaler-operator",
              "namespace": "openshift-machine-api",
              "type": "Deployment",
              "children": [
                {
                  "name": "cluster-autoscaler-operator-6f47946d44-zxp44",
                  "namespace": "openshift-machine-api",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-oauth-apiserver",
          "type": "Namespace",
          "children": [
            {
              "name": "apiserver",
              "namespace": "openshift-oauth-apiserver",
              "type": "Deployment",
              "children": [
                {
                  "name": "apiserver-7cd894f44-pf8ww",
                  "namespace": "openshift-oauth-apiserver",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-kube-scheduler",
          "type": "Namespace",
          "children": [
            {
              "name": "revision-status-5",
              "namespace": "openshift-kube-scheduler",
              "type": "ConfigMap",
              "children": [
                {
                  "name": "installer-5-ip-10-0-131-74.us-east-2.compute.internal",
                  "namespace": "openshift-kube-scheduler",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#40199A"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-controller-manager-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "openshift-controller-manager-operator",
              "namespace": "openshift-controller-manager-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "openshift-controller-manager-operator-7c4dc65c97-99cc7",
                  "namespace": "openshift-controller-manager-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-machine-config-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "machine-config-operator",
              "namespace": "openshift-machine-config-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "machine-config-operator-54ccccf58d-blpjj",
                  "namespace": "openshift-machine-config-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "cluster-monitoring-operator",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "cluster-monitoring-operator-db6c6d477-lvqww",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        }
      ],
      "color": "#8476D1"
    },
    {
      "name": "ip-10-0-179-199.us-east-2.compute.internal",
      "type": "Node",
      "children": [
        {
          "name": "openshift-ingress",
          "type": "Namespace",
          "children": [
            {
              "name": "router-default",
              "namespace": "openshift-ingress",
              "type": "Deployment",
              "children": [
                {
                  "name": "router-default-7d7cb7b9cb-ct2ws",
                  "namespace": "openshift-ingress",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "thanos-querier",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "thanos-querier-547cf74fc9-pm29d",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "prometheus-adapter",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "prometheus-adapter-86cc8f6645-kwdkz",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "prometheus-k8s",
              "namespace": "openshift-monitoring",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "prometheus-k8s-1",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "prometheus-operator-admission-webhook",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "prometheus-operator-admission-webhook-b64bb8f5f-8ln5h",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "alertmanager-main",
              "namespace": "openshift-monitoring",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "alertmanager-main-0",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-dns",
          "type": "Namespace",
          "children": [
            {
              "name": "dns-default",
              "namespace": "openshift-dns",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "dns-default-flflw",
                  "namespace": "openshift-dns",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-user-workload-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "prometheus-user-workload",
              "namespace": "openshift-user-workload-monitoring",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "prometheus-user-workload-0",
                  "namespace": "openshift-user-workload-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "thanos-ruler-user-workload",
              "namespace": "openshift-user-workload-monitoring",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "thanos-ruler-user-workload-0",
                  "namespace": "openshift-user-workload-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-network-diagnostics",
          "type": "Namespace",
          "children": [
            {
              "name": "network-check-source",
              "namespace": "openshift-network-diagnostics",
              "type": "Deployment",
              "children": [
                {
                  "name": "network-check-source-b5988947-5jqdx",
                  "namespace": "openshift-network-diagnostics",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "netobserv",
          "type": "Namespace",
          "children": [
            {
              "name": "lokistack-gateway",
              "namespace": "netobserv",
              "type": "Deployment",
              "children": [
                {
                  "name": "lokistack-gateway-56cfb6684-2dhzr",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "lokistack-distributor",
              "namespace": "netobserv",
              "type": "Deployment",
              "children": [
                {
                  "name": "lokistack-distributor-cdb5df9cb-59q2f",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "lokistack-querier",
              "namespace": "netobserv",
              "type": "Deployment",
              "children": [
                {
                  "name": "lokistack-querier-5fb88847-vntr8",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "flowlogs-pipeline-transformer",
              "namespace": "netobserv",
              "type": "Deployment",
              "children": [
                {
                  "name": "flowlogs-pipeline-transformer-7499cd9469-zj8rc",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "lokistack-query-frontend",
              "namespace": "netobserv",
              "type": "Deployment",
              "children": [
                {
                  "name": "lokistack-query-frontend-5dbd9b778c-ffzzk",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "default",
          "type": "Namespace",
          "children": [
            {
              "name": "ai-locals",
              "namespace": "default",
              "type": "Deployment",
              "children": [
                {
                  "name": "ai-locals-69646c68c5-kztbg",
                  "namespace": "default",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "ui-base",
              "namespace": "default",
              "type": "Deployment",
              "children": [
                {
                  "name": "ui-base-574d886bcb-jhm95",
                  "namespace": "default",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "ai-visitors",
              "namespace": "default",
              "type": "Deployment",
              "children": [
                {
                  "name": "ai-visitors-594bc648d4-4q2qq",
                  "namespace": "default",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        }
      ],
      "color": "#8476D1"
    },
    {
      "name": "ip-10-0-191-115.us-east-2.compute.internal",
      "type": "Node",
      "children": [
        {
          "name": "openshift-marketplace",
          "type": "Namespace",
          "children": [
            {
              "name": "redhat-operators",
              "namespace": "openshift-marketplace",
              "type": "CatalogSource",
              "children": [
                {
                  "name": "redhat-operators-ttj2l",
                  "namespace": "openshift-marketplace",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "redhat-marketplace",
              "namespace": "openshift-marketplace",
              "type": "CatalogSource",
              "children": [
                {
                  "name": "redhat-marketplace-g2mcg",
                  "namespace": "openshift-marketplace",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "certified-operators",
              "namespace": "openshift-marketplace",
              "type": "CatalogSource",
              "children": [
                {
                  "name": "certified-operators-jpmvn",
                  "namespace": "openshift-marketplace",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-operator-lifecycle-manager",
          "type": "Namespace",
          "children": [
            {
              "name": "packageserver",
              "namespace": "openshift-operator-lifecycle-manager",
              "type": "Deployment",
              "children": [
                {
                  "name": "packageserver-6cfdb4548c-42kjm",
                  "namespace": "openshift-operator-lifecycle-manager",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-console",
          "type": "Namespace",
          "children": [
            {
              "name": "console",
              "namespace": "openshift-console",
              "type": "Deployment",
              "children": [
                {
                  "name": "console-ff86bcd55-pph6l",
                  "namespace": "openshift-console",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-apiserver",
          "type": "Namespace",
          "children": [
            {
              "name": "apiserver",
              "namespace": "openshift-apiserver",
              "type": "Deployment",
              "children": [
                {
                  "name": "apiserver-7764cf65b-h6fd6",
                  "namespace": "openshift-apiserver",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-oauth-apiserver",
          "type": "Namespace",
          "children": [
            {
              "name": "apiserver",
              "namespace": "openshift-oauth-apiserver",
              "type": "Deployment",
              "children": [
                {
                  "name": "apiserver-7cd894f44-ddg5h",
                  "namespace": "openshift-oauth-apiserver",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-console-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "console-operator",
              "namespace": "openshift-console-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "console-operator-7b68655f7c-cp456",
                  "namespace": "openshift-console-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-authentication",
          "type": "Namespace",
          "children": [
            {
              "name": "oauth-openshift",
              "namespace": "openshift-authentication",
              "type": "Deployment",
              "children": [
                {
                  "name": "oauth-openshift-5f8c588df6-wjpp9",
                  "namespace": "openshift-authentication",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-machine-api",
          "type": "Namespace",
          "children": [
            {
              "name": "machine-api-controllers",
              "namespace": "openshift-machine-api",
              "type": "Deployment",
              "children": [
                {
                  "name": "machine-api-controllers-69cd78b58d-6lb6r",
                  "namespace": "openshift-machine-api",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-dns",
          "type": "Namespace",
          "children": [
            {
              "name": "dns-default",
              "namespace": "openshift-dns",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "dns-default-8j2r5",
                  "namespace": "openshift-dns",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-cluster-storage-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "csi-snapshot-webhook",
              "namespace": "openshift-cluster-storage-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "csi-snapshot-webhook-79d48f846b-jd59q",
                  "namespace": "openshift-cluster-storage-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "prometheus-operator",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "prometheus-operator-7f7d4854f7-p422t",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-service-ca",
          "type": "Namespace",
          "children": [
            {
              "name": "service-ca",
              "namespace": "openshift-service-ca",
              "type": "Deployment",
              "children": [
                {
                  "name": "service-ca-66cfb699d9-gxg99",
                  "namespace": "openshift-service-ca",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        }
      ],
      "color": "#8476D1"
    },
    {
      "name": "ip-10-0-203-192.us-east-2.compute.internal",
      "type": "Node",
      "children": [
        {
          "name": "openshift-marketplace",
          "type": "Namespace",
          "children": [
            {
              "name": "community-operators",
              "namespace": "openshift-marketplace",
              "type": "CatalogSource",
              "children": [
                {
                  "name": "community-operators-s8n5m",
                  "namespace": "openshift-marketplace",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-cloud-credential-operator",
          "type": "Namespace",
          "children": [
            {
              "name": "pod-identity-webhook",
              "namespace": "openshift-cloud-credential-operator",
              "type": "Deployment",
              "children": [
                {
                  "name": "pod-identity-webhook-54699c8765-j2sfs",
                  "namespace": "openshift-cloud-credential-operator",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-oauth-apiserver",
          "type": "Namespace",
          "children": [
            {
              "name": "apiserver",
              "namespace": "openshift-oauth-apiserver",
              "type": "Deployment",
              "children": [
                {
                  "name": "apiserver-7cd894f44-6r9tq",
                  "namespace": "openshift-oauth-apiserver",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-apiserver",
          "type": "Namespace",
          "children": [
            {
              "name": "apiserver",
              "namespace": "openshift-apiserver",
              "type": "Deployment",
              "children": [
                {
                  "name": "apiserver-7764cf65b-kkb4d",
                  "namespace": "openshift-apiserver",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-dns",
          "type": "Namespace",
          "children": [
            {
              "name": "dns-default",
              "namespace": "openshift-dns",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "dns-default-rb9df",
                  "namespace": "openshift-dns",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-user-workload-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "prometheus-operator",
              "namespace": "openshift-user-workload-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "prometheus-operator-65f9594685-kgd74",
                  "namespace": "openshift-user-workload-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-controller-manager",
          "type": "Namespace",
          "children": [
            {
              "name": "controller-manager",
              "namespace": "openshift-controller-manager",
              "type": "DaemonSet",
              "children": [
                {
                  "name": "controller-manager-mxzqf",
                  "namespace": "openshift-controller-manager",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-console",
          "type": "Namespace",
          "children": [
            {
              "name": "console",
              "namespace": "openshift-console",
              "type": "Deployment",
              "children": [
                {
                  "name": "console-ff86bcd55-n7xnv",
                  "namespace": "openshift-console",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-authentication",
          "type": "Namespace",
          "children": [
            {
              "name": "oauth-openshift",
              "namespace": "openshift-authentication",
              "type": "Deployment",
              "children": [
                {
                  "name": "oauth-openshift-5f8c588df6-qq5tp",
                  "namespace": "openshift-authentication",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        }
      ],
      "color": "#8476D1"
    },
    {
      "name": "ip-10-0-215-32.us-east-2.compute.internal",
      "type": "Node",
      "children": [
        {
          "name": "netobserv",
          "type": "Namespace",
          "children": [
            {
              "name": "kafka-cluster-kafka",
              "namespace": "netobserv",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "kafka-cluster-kafka-1",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                },
                {
                  "name": "kafka-cluster-kafka-0",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                },
                {
                  "name": "kafka-cluster-kafka-2",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "lokistack-index-gateway",
              "namespace": "netobserv",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "lokistack-index-gateway-0",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "flowlogs-pipeline-transformer",
              "namespace": "netobserv",
              "type": "Deployment",
              "children": [
                {
                  "name": "flowlogs-pipeline-transformer-7499cd9469-5nl9x",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "netobserv-plugin",
              "namespace": "netobserv",
              "type": "Deployment",
              "children": [
                {
                  "name": "netobserv-plugin-75ff875bcc-wlmj9",
                  "namespace": "netobserv",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "prometheus-adapter",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "prometheus-adapter-86cc8f6645-22pfd",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "kube-state-metrics",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "kube-state-metrics-5d5bcd4c48-khnhj",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "prometheus-operator-admission-webhook",
              "namespace": "openshift-monitoring",
              "type": "Deployment",
              "children": [
                {
                  "name": "prometheus-operator-admission-webhook-b64bb8f5f-4p49w",
                  "namespace": "openshift-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-user-workload-monitoring",
          "type": "Namespace",
          "children": [
            {
              "name": "thanos-ruler-user-workload",
              "namespace": "openshift-user-workload-monitoring",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "thanos-ruler-user-workload-1",
                  "namespace": "openshift-user-workload-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            },
            {
              "name": "prometheus-user-workload",
              "namespace": "openshift-user-workload-monitoring",
              "type": "StatefulSet",
              "children": [
                {
                  "name": "prometheus-user-workload-1",
                  "namespace": "openshift-user-workload-monitoring",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#2b9af3"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "openshift-image-registry",
          "type": "Namespace",
          "children": [
            {
              "name": "image-registry",
              "namespace": "openshift-image-registry",
              "type": "Deployment",
              "children": [
                {
                  "name": "image-registry-69f8c8547c-h2khb",
                  "namespace": "openshift-image-registry",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        },
        {
          "name": "default",
          "type": "Namespace",
          "children": [
            {
              "name": "ball-base",
              "namespace": "default",
              "type": "Deployment",
              "children": [
                {
                  "name": "ball-base-6bbb6dcd9b-g99x2",
                  "namespace": "default",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            },
            {
              "name": "ai-locals",
              "namespace": "default",
              "type": "Deployment",
              "children": [
                {
                  "name": "ai-locals-69646c68c5-q65sd",
                  "namespace": "default",
                  "type": "Pod",
                  "children": [],
                  "color": "#009596"
                }
              ],
              "color": "#004080"
            }
          ],
          "color": "#1E4F18"
        }
      ],
      "color": "#8476D1"
    }
  ],
  "edges": [
    {
      "from": {
        "name": "router-default-7d7cb7b9cb-xplkx",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.0.13.122",
        "children": []
      },
      "size": 451269
    },
    {
      "from": {
        "name": "router-default-7d7cb7b9cb-ct2ws",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "10.0.35.219",
        "children": []
      },
      "size": 27259
    },
    {
      "from": {
        "name": "redhat-operators-ttj2l",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-6cfdb4548c-42kjm",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 713121
    },
    {
      "from": {
        "name": "redhat-marketplace-g2mcg",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-6cfdb4548c-42kjm",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 488401
    },
    {
      "from": {
        "name": "certified-operators-jpmvn",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-6cfdb4548c-42kjm",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 819221
    },
    {
      "from": {
        "name": "community-operators-s8n5m",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-6cfdb4548c-42kjm",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 4434011
    },
    {
      "from": {
        "name": "router-default-7d7cb7b9cb-xplkx",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "console-ff86bcd55-pph6l",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 12534
    },
    {
      "from": {
        "name": "thanos-querier-547cf74fc9-pm29d",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "console-ff86bcd55-pph6l",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 79364
    },
    {
      "from": {
        "name": "router-default-7d7cb7b9cb-ct2ws",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "console-ff86bcd55-pph6l",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 22533
    },
    {
      "from": {
        "name": "catalog-operator-5655866444-q82qc",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "redhat-operators-ttj2l",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 63390
    },
    {
      "from": {
        "name": "machine-api-controllers-69cd78b58d-6lb6r",
        "namespace": "openshift-machine-api",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3285
    },
    {
      "from": {
        "name": "dns-default-8j2r5",
        "namespace": "openshift-dns",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 5762
    },
    {
      "from": {
        "name": "console-ff86bcd55-pph6l",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 5173
    },
    {
      "from": {
        "name": "apiserver-7764cf65b-h6fd6",
        "namespace": "openshift-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 18559
    },
    {
      "from": {
        "name": "console-operator-7b68655f7c-cp456",
        "namespace": "openshift-console-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 13435
    },
    {
      "from": {
        "name": "router-default-7d7cb7b9cb-xplkx",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 9975
    },
    {
      "from": {
        "name": "dns-default-kkj9j",
        "namespace": "openshift-dns",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 7040
    },
    {
      "from": {
        "name": "image-registry-69f8c8547c-cjbgx",
        "namespace": "openshift-image-registry",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3870
    },
    {
      "from": {
        "name": "kube-apiserver-operator-789b8c8bf6-s7pk2",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 11995
    },
    {
      "from": {
        "name": "controller-manager-q4nmg",
        "namespace": "openshift-controller-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 4184
    },
    {
      "from": {
        "name": "cluster-storage-operator-6f6b9c8df6-bb8mc",
        "namespace": "openshift-cluster-storage-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3870
    },
    {
      "from": {
        "name": "openshift-kube-scheduler-operator-7c65bc5d9b-mc294",
        "namespace": "openshift-kube-scheduler-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3870
    },
    {
      "from": {
        "name": "insights-operator-7d78496b84-gjhtj",
        "namespace": "openshift-insights",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3900
    },
    {
      "from": {
        "name": "service-ca-operator-6bf9d9448c-zlm6p",
        "namespace": "openshift-service-ca-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3870
    },
    {
      "from": {
        "name": "etcd-operator-78974f57b9-hdzg7",
        "namespace": "openshift-etcd-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 9676
    },
    {
      "from": {
        "name": "openshift-apiserver-operator-6c9fc6469c-vl982",
        "namespace": "openshift-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 18998
    },
    {
      "from": {
        "name": "authentication-operator-dbd5bd768-tgc78",
        "namespace": "openshift-authentication-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 16816
    },
    {
      "from": {
        "name": "openshift-config-operator-674f98f947-bgtjr",
        "namespace": "openshift-config-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3870
    },
    {
      "from": {
        "name": "cloud-credential-operator-584455c8f5-gxbxg",
        "namespace": "openshift-cloud-credential-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 6389
    },
    {
      "from": {
        "name": "kube-controller-manager-operator-66bc7cfd-nswkl",
        "namespace": "openshift-kube-controller-manager-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 9847
    },
    {
      "from": {
        "name": "apiserver-7764cf65b-r5lqg",
        "namespace": "openshift-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 13884
    },
    {
      "from": {
        "name": "oauth-openshift-5f8c588df6-plx5r",
        "namespace": "openshift-authentication",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 2583
    },
    {
      "from": {
        "name": "prometheus-adapter-86cc8f6645-22pfd",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 9372
    },
    {
      "from": {
        "name": "thanos-ruler-user-workload-1",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 18974
    },
    {
      "from": {
        "name": "image-registry-69f8c8547c-h2khb",
        "namespace": "openshift-image-registry",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3870
    },
    {
      "from": {
        "name": "kube-state-metrics-5d5bcd4c48-khnhj",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 833297
    },
    {
      "from": {
        "name": "dns-default-rb9df",
        "namespace": "openshift-dns",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 7311
    },
    {
      "from": {
        "name": "apiserver-7764cf65b-kkb4d",
        "namespace": "openshift-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 46681
    },
    {
      "from": {
        "name": "prometheus-operator-65f9594685-kgd74",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3868
    },
    {
      "from": {
        "name": "controller-manager-mxzqf",
        "namespace": "openshift-controller-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 2988
    },
    {
      "from": {
        "name": "console-ff86bcd55-n7xnv",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3616
    },
    {
      "from": {
        "name": "dns-default-flflw",
        "namespace": "openshift-dns",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 5419
    },
    {
      "from": {
        "name": "prometheus-adapter-86cc8f6645-kwdkz",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3870
    },
    {
      "from": {
        "name": "prometheus-user-workload-0",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 9850
    },
    {
      "from": {
        "name": "thanos-ruler-user-workload-0",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 15080
    },
    {
      "from": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 20025
    },
    {
      "from": {
        "name": "network-check-source-b5988947-5jqdx",
        "namespace": "openshift-network-diagnostics",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 5216
    },
    {
      "from": {
        "name": "thanos-ruler-user-workload-1",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-7d7cb7b9cb-xplkx",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3760
    },
    {
      "from": {
        "name": "console-ff86bcd55-n7xnv",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-7d7cb7b9cb-xplkx",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 434564
    },
    {
      "from": {
        "name": "thanos-querier-547cf74fc9-pm29d",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-7d7cb7b9cb-xplkx",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 2373
    },
    {
      "from": {
        "name": "thanos-ruler-user-workload-0",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-7d7cb7b9cb-xplkx",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 1534
    },
    {
      "from": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-7d7cb7b9cb-xplkx",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 14116
    },
    {
      "from": {
        "name": "lokistack-gateway-56cfb6684-2dhzr",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-7d7cb7b9cb-xplkx",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 1218
    },
    {
      "from": {
        "name": "lokistack-compactor-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-ingester-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 8356
    },
    {
      "from": {
        "name": "lokistack-distributor-cdb5df9cb-59q2f",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-ingester-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 2048740
    },
    {
      "from": {
        "name": "lokistack-querier-5fb88847-vntr8",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-ingester-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 89629
    },
    {
      "from": {
        "name": "lokistack-distributor-cdb5df9cb-59q2f",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-compactor-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 21873
    },
    {
      "from": {
        "name": "lokistack-querier-5fb88847-vntr8",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-compactor-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 27421
    },
    {
      "from": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "thanos-querier-547cf74fc9-zq2j4",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 57580
    },
    {
      "from": {
        "name": "thanos-ruler-user-workload-1",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "thanos-querier-547cf74fc9-zq2j4",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 23142
    },
    {
      "from": {
        "name": "thanos-ruler-user-workload-0",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "thanos-querier-547cf74fc9-zq2j4",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 8643
    },
    {
      "from": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "thanos-querier-547cf74fc9-zq2j4",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 259486
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-1",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-lgwvk",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 50838
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-2",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-lgwvk",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 35602
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-lgwvk",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 66913
    },
    {
      "from": {
        "name": "lokistack-gateway-56cfb6684-2dhzr",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-lgwvk",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 130297
    },
    {
      "from": {
        "name": "machine-api-controllers-69cd78b58d-6lb6r",
        "namespace": "openshift-machine-api",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kube-apiserver-operator-789b8c8bf6-s7pk2",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 8828
    },
    {
      "from": {
        "name": "csi-snapshot-webhook-79d48f846b-jd59q",
        "namespace": "openshift-cluster-storage-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kube-apiserver-operator-789b8c8bf6-s7pk2",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 5120
    },
    {
      "from": {
        "name": "dns-default-dwp7n",
        "namespace": "openshift-dns",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kube-apiserver-operator-789b8c8bf6-s7pk2",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3968
    },
    {
      "from": {
        "name": "cluster-autoscaler-operator-6f47946d44-zxp44",
        "namespace": "openshift-machine-api",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kube-apiserver-operator-789b8c8bf6-s7pk2",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 4802
    },
    {
      "from": {
        "name": "prometheus-operator-admission-webhook-b64bb8f5f-8ln5h",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kube-apiserver-operator-789b8c8bf6-s7pk2",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 9215
    },
    {
      "from": {
        "name": "certified-operators-jpmvn",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "catalog-operator-5655866444-q82qc",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 28282
    },
    {
      "from": {
        "name": "community-operators-s8n5m",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "catalog-operator-5655866444-q82qc",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 115632
    },
    {
      "from": {
        "name": "oauth-openshift-5f8c588df6-wjpp9",
        "namespace": "openshift-authentication",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "authentication-operator-dbd5bd768-tgc78",
        "namespace": "openshift-authentication-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3011
    },
    {
      "from": {
        "name": "oauth-openshift-5f8c588df6-qq5tp",
        "namespace": "openshift-authentication",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "authentication-operator-dbd5bd768-tgc78",
        "namespace": "openshift-authentication-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3011
    },
    {
      "from": {
        "name": "redhat-operators-ttj2l",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-6cfdb4548c-4z97s",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 1697798
    },
    {
      "from": {
        "name": "redhat-marketplace-g2mcg",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-6cfdb4548c-4z97s",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 1376044
    },
    {
      "from": {
        "name": "certified-operators-jpmvn",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-6cfdb4548c-4z97s",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 1411327
    },
    {
      "from": {
        "name": "community-operators-s8n5m",
        "namespace": "openshift-marketplace",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "packageserver-6cfdb4548c-4z97s",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 4670035
    },
    {
      "from": {
        "name": "lokistack-querier-5fb88847-vntr8",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-index-gateway-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 110259
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-1",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-5nl9x",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 13933
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-2",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-5nl9x",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 17857
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-5nl9x",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 15188
    },
    {
      "from": {
        "name": "lokistack-gateway-56cfb6684-2dhzr",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-5nl9x",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 88629
    },
    {
      "from": {
        "name": "ai-locals-69646c68c5-kztbg",
        "namespace": "default",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "ball-base-6bbb6dcd9b-g99x2",
        "namespace": "default",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 1153
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-2",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kafka-cluster-kafka-1",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 240476
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kafka-cluster-kafka-1",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 215523
    },
    {
      "from": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-zj8rc",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kafka-cluster-kafka-1",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 51857
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kafka-cluster-kafka-2",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 206066
    },
    {
      "from": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-zj8rc",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kafka-cluster-kafka-2",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 57865
    },
    {
      "from": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-zj8rc",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kafka-cluster-kafka-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 46839
    },
    {
      "from": {
        "name": "thanos-querier-547cf74fc9-zq2j4",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "console-ff86bcd55-n7xnv",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 15132
    },
    {
      "from": {
        "name": "netobserv-plugin-75ff875bcc-wlmj9",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "console-ff86bcd55-n7xnv",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 209245
    },
    {
      "from": {
        "name": "lokistack-gateway-56cfb6684-2dhzr",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-zj8rc",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 15722
    },
    {
      "from": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "thanos-querier-547cf74fc9-pm29d",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 318517
    },
    {
      "from": {
        "name": "thanos-ruler-user-workload-0",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "thanos-querier-547cf74fc9-pm29d",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 9183
    },
    {
      "from": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "thanos-querier-547cf74fc9-pm29d",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 253763
    },
    {
      "from": {
        "name": "dns-default-8j2r5",
        "namespace": "openshift-dns",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 7308
    },
    {
      "from": {
        "name": "console-ff86bcd55-pph6l",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3575
    },
    {
      "from": {
        "name": "apiserver-7764cf65b-h6fd6",
        "namespace": "openshift-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 25797
    },
    {
      "from": {
        "name": "prometheus-operator-7f7d4854f7-p422t",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 4455
    },
    {
      "from": {
        "name": "console-operator-7b68655f7c-cp456",
        "namespace": "openshift-console-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 14050
    },
    {
      "from": {
        "name": "oauth-openshift-5f8c588df6-wjpp9",
        "namespace": "openshift-authentication",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 1202
    },
    {
      "from": {
        "name": "telemeter-client-6c8549b599-fjq5k",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3404
    },
    {
      "from": {
        "name": "alertmanager-main-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 13113
    },
    {
      "from": {
        "name": "dns-default-kkj9j",
        "namespace": "openshift-dns",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 5388
    },
    {
      "from": {
        "name": "kube-apiserver-operator-789b8c8bf6-s7pk2",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 5678
    },
    {
      "from": {
        "name": "cluster-storage-operator-6f6b9c8df6-bb8mc",
        "namespace": "openshift-cluster-storage-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 1761
    },
    {
      "from": {
        "name": "openshift-controller-manager-operator-7c4dc65c97-99cc7",
        "namespace": "openshift-controller-manager-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 9895
    },
    {
      "from": {
        "name": "service-ca-operator-6bf9d9448c-zlm6p",
        "namespace": "openshift-service-ca-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3794
    },
    {
      "from": {
        "name": "openshift-apiserver-operator-6c9fc6469c-vl982",
        "namespace": "openshift-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 15218
    },
    {
      "from": {
        "name": "authentication-operator-dbd5bd768-tgc78",
        "namespace": "openshift-authentication-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 9372
    },
    {
      "from": {
        "name": "openshift-config-operator-674f98f947-bgtjr",
        "namespace": "openshift-config-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3913
    },
    {
      "from": {
        "name": "kube-controller-manager-operator-66bc7cfd-nswkl",
        "namespace": "openshift-kube-controller-manager-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 4193
    },
    {
      "from": {
        "name": "dns-default-dwp7n",
        "namespace": "openshift-dns",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 5366
    },
    {
      "from": {
        "name": "cluster-autoscaler-operator-6f47946d44-zxp44",
        "namespace": "openshift-machine-api",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 4172
    },
    {
      "from": {
        "name": "apiserver-7764cf65b-r5lqg",
        "namespace": "openshift-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 10864
    },
    {
      "from": {
        "name": "prometheus-adapter-86cc8f6645-22pfd",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3900
    },
    {
      "from": {
        "name": "prometheus-user-workload-1",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 7150
    },
    {
      "from": {
        "name": "thanos-ruler-user-workload-1",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 10464
    },
    {
      "from": {
        "name": "image-registry-69f8c8547c-h2khb",
        "namespace": "openshift-image-registry",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3870
    },
    {
      "from": {
        "name": "kube-state-metrics-5d5bcd4c48-khnhj",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 626435
    },
    {
      "from": {
        "name": "apiserver-7764cf65b-kkb4d",
        "namespace": "openshift-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 14328
    },
    {
      "from": {
        "name": "oauth-openshift-5f8c588df6-qq5tp",
        "namespace": "openshift-authentication",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3862
    },
    {
      "from": {
        "name": "console-ff86bcd55-n7xnv",
        "namespace": "openshift-console",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 8824
    },
    {
      "from": {
        "name": "dns-default-flflw",
        "namespace": "openshift-dns",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 7437
    },
    {
      "from": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "alertmanager-main-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 2509
    },
    {
      "from": {
        "name": "prometheus-k8s-0",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-7d7cb7b9cb-ct2ws",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 12477
    },
    {
      "from": {
        "name": "prometheus-user-workload-1",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-7d7cb7b9cb-ct2ws",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 2531
    },
    {
      "from": {
        "name": "thanos-ruler-user-workload-1",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-7d7cb7b9cb-ct2ws",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 3741
    },
    {
      "from": {
        "name": "prometheus-user-workload-0",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-7d7cb7b9cb-ct2ws",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 4872
    },
    {
      "from": {
        "name": "prometheus-k8s-1",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "router-default-7d7cb7b9cb-ct2ws",
        "namespace": "openshift-ingress",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 5690
    },
    {
      "from": {
        "name": "ai-locals-69646c68c5-q65sd",
        "namespace": "default",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "ui-base-574d886bcb-jhm95",
        "namespace": "default",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 1146
    },
    {
      "from": {
        "name": "lokistack-querier-5fb88847-vntr8",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-distributor-cdb5df9cb-59q2f",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 12693
    },
    {
      "from": {
        "name": "dns-default-flflw",
        "namespace": "openshift-dns",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-querier-5fb88847-vntr8",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 5687
    },
    {
      "from": {
        "name": "lokistack-query-frontend-5dbd9b778c-ffzzk",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-querier-5fb88847-vntr8",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "size": 1659
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "100.64.0.2",
        "children": []
      },
      "size": 6505
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-1",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "100.64.0.3",
        "children": []
      },
      "size": 20729
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-1",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "100.64.0.4",
        "children": []
      },
      "size": 13978
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "100.64.0.5",
        "children": []
      },
      "size": 16915
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-2",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "100.64.0.6",
        "children": []
      },
      "size": 3252
    },
    {
      "from": {
        "name": "kafka-cluster-kafka-1",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "100.64.0.7",
        "children": []
      },
      "size": 3272
    },
    {
      "from": {
        "name": "service-ca-66cfb699d9-gxg99",
        "namespace": "openshift-service-ca",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 8259
    },
    {
      "from": {
        "name": "kube-apiserver-operator-789b8c8bf6-s7pk2",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 6512
    },
    {
      "from": {
        "name": "openshift-controller-manager-operator-7c4dc65c97-99cc7",
        "namespace": "openshift-controller-manager-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 4302
    },
    {
      "from": {
        "name": "machine-config-operator-54ccccf58d-blpjj",
        "namespace": "openshift-machine-config-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 62341
    },
    {
      "from": {
        "name": "cluster-monitoring-operator-db6c6d477-lvqww",
        "namespace": "openshift-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 83898
    },
    {
      "from": {
        "name": "kube-controller-manager-operator-66bc7cfd-nswkl",
        "namespace": "openshift-kube-controller-manager-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 4484
    },
    {
      "from": {
        "name": "apiserver-7764cf65b-kkb4d",
        "namespace": "openshift-apiserver",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 1066
    },
    {
      "from": {
        "name": "lokistack-gateway-56cfb6684-2dhzr",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 7307
    },
    {
      "from": {
        "name": "network-check-source-b5988947-5jqdx",
        "namespace": "openshift-network-diagnostics",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "kubernetes",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 2379
    },
    {
      "from": {
        "name": "kube-apiserver-operator-789b8c8bf6-s7pk2",
        "namespace": "openshift-kube-apiserver-operator",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "dns-default",
        "namespace": "openshift-dns",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 1538
    },
    {
      "from": {
        "name": "lokistack-querier-5fb88847-vntr8",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "dns-default",
        "namespace": "openshift-dns",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 2546
    },
    {
      "from": {
        "name": "packageserver-6cfdb4548c-42kjm",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "community-operators",
        "namespace": "openshift-marketplace",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 6209
    },
    {
      "from": {
        "name": "catalog-operator-5655866444-q82qc",
        "namespace": "openshift-operator-lifecycle-manager",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "redhat-operators",
        "namespace": "openshift-marketplace",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 3780
    },
    {
      "from": {
        "name": "lokistack-querier-5fb88847-vntr8",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-compactor-http",
        "namespace": "netobserv",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 1387
    },
    {
      "from": {
        "name": "lokistack-gateway-56cfb6684-2dhzr",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-distributor-http",
        "namespace": "netobserv",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 242931
    },
    {
      "from": {
        "name": "ai-locals-69646c68c5-q65sd",
        "namespace": "default",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "ui",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 2805
    },
    {
      "from": {
        "name": "ai-locals-69646c68c5-kztbg",
        "namespace": "default",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "ui",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 6075
    },
    {
      "from": {
        "name": "ai-visitors-594bc648d4-4q2qq",
        "namespace": "default",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "ui",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 5629
    },
    {
      "from": {
        "name": "ai-locals-69646c68c5-q65sd",
        "namespace": "default",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "ball",
        "namespace": "default",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 1017
    },
    {
      "from": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-lgwvk",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-gateway-http",
        "namespace": "netobserv",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 100863
    },
    {
      "from": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-5nl9x",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-gateway-http",
        "namespace": "netobserv",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 114331
    },
    {
      "from": {
        "name": "flowlogs-pipeline-transformer-7499cd9469-zj8rc",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "lokistack-gateway-http",
        "namespace": "netobserv",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 112244
    },
    {
      "from": {
        "name": "thanos-ruler-user-workload-1",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "thanos-querier",
        "namespace": "openshift-monitoring",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 3706
    },
    {
      "from": {
        "name": "thanos-ruler-user-workload-0",
        "namespace": "openshift-user-workload-monitoring",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "thanos-querier",
        "namespace": "openshift-monitoring",
        "type": "Service",
        "children": [],
        "color": "#3E8635"
      },
      "size": 18596
    },
    {
      "from": {
        "name": "lokistack-ingester-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "52.219.102.161",
        "children": []
      },
      "size": 10162
    },
    {
      "from": {
        "name": "lokistack-ingester-0",
        "namespace": "netobserv",
        "type": "Pod",
        "children": [],
        "color": "#009596"
      },
      "to": {
        "name": "52.219.106.233",
        "children": []
      },
      "size": 5294
    }
  ],
  "options": {
    "edges": true,
    "resourceHTML": true,
  }
};

export default SmallCluster;