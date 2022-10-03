export const props = {
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

export default props;